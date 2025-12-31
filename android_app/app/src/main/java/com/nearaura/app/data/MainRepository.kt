package com.nearaura.app.data

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FieldValue
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.GeoPoint
import com.nearaura.app.network.ApiService
import java.io.File
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.asRequestBody
import okhttp3.RequestBody.Companion.toRequestBody
import org.imperiumlabs.geofirestore.GeoFirestore
import org.imperiumlabs.geofirestore.listeners.GeoQueryEventListener

class MainRepository(
    private val apiService: ApiService,
    private val firestore: FirebaseFirestore,
    private val auth: FirebaseAuth
) {

    private val geoFirestore = GeoFirestore(firestore.collection("user_locations"))

    // --- Profile Photo and Settings ---

    suspend fun getUserSettings(): User {
        val response = apiService.getUserSettings()
        if (response.isSuccessful) {
            return response.body() ?: throw Exception("User data is null in the API response body")
        } else {
            throw Exception("Failed to get user settings: ${response.code()} ${response.message()}")
        }
    }

    suspend fun uploadProfilePhoto(photoFile: File, slotIndex: Int): String {
        val requestFile = photoFile.asRequestBody("image/*".toMediaTypeOrNull())
        val filePart = MultipartBody.Part.createFormData("photo", photoFile.name, requestFile)
        val indexRequestBody = slotIndex.toString().toRequestBody("text/plain".toMediaTypeOrNull())

        val response = apiService.uploadProfilePhoto(filePart, indexRequestBody)
        if (response.isSuccessful) {
            val responseBody = response.body()
            val imageUrl = responseBody?.get("imageUrl")
            return imageUrl ?: throw Exception("'imageUrl' not found in the server response.")
        } else {
            throw Exception("Failed to upload profile photo: ${response.code()} ${response.message()}")
        }
    }

    // Task #31: Aura Decay - Update lastActive timestamp
    suspend fun updateUserActivity() {
        val uid = auth.currentUser?.uid ?: return
        val userDocRef = firestore.collection("users").document(uid)
        userDocRef.update("lastActive", FieldValue.serverTimestamp()).await()
    }

    // --- Geo-Location ---

    fun getNearbyUsersGeo(center: GeoPoint, radiusKm: Double): Flow<List<User>> = callbackFlow {
        val geoQuery = geoFirestore.queryAtLocation(center, radiusKm)
        val userIdsInQuery = mutableSetOf<String>()

        val listener = object : GeoQueryEventListener {
            override fun onKeyEntered(documentID: String, location: GeoPoint) {
                userIdsInQuery.add(documentID)
                fetchUsersAndSend(userIdsInQuery.toList()) // Fetch full user data
            }

            override fun onKeyExited(documentID: String) {
                userIdsInQuery.remove(documentID)
                fetchUsersAndSend(userIdsInQuery.toList()) // Update list
            }

            override fun onKeyMoved(documentID: String, location: GeoPoint) { }

            override fun onGeoQueryReady() {
                fetchUsersAndSend(userIdsInQuery.toList())
            }

            override fun onGeoQueryError(exception: Exception) {
                close(exception)
            }

            private fun fetchUsersAndSend(userIds: List<String>) {
                if (userIds.isEmpty()) {
                    trySend(emptyList())
                    return
                }

                firestore.collection("users").whereIn("uid", userIds).get()
                    .addOnSuccessListener { snapshot ->
                        val users = snapshot.toObjects(User::class.java)
                        trySend(users)
                    }
                    .addOnFailureListener { e ->
                        close(e)
                    }
            }
        }

        geoQuery.addGeoQueryEventListener(listener)

        awaitClose {
            geoQuery.removeGeoQueryEventListener(listener)
        }
    }
}