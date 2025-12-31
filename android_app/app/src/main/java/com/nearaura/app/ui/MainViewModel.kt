package com.nearaura.app.viewmodel

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.google.firebase.firestore.GeoPoint
import com.nearaura.app.data.MainRepository
import com.nearaura.app.data.User
import com.nearaura.app.network.Resource
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch
import java.io.File

/**
 * Main orchestrator ViewModel.
 * NOTE: It now extends AndroidViewModel to get the application context, which is
 * often needed for location services.
 */
class MainViewModel(
    application: Application, // Now requires Application context
    private val repository: MainRepository
) : AndroidViewModel(application) {

    // --- Existing LiveData for User Settings and Photo Upload ---
    private val _userSettings = MutableLiveData<Resource<User>>()
    val userSettings: LiveData<Resource<User>> = _userSettings

    private val _photoUploadResult = MutableLiveData<Resource<String>>()
    val photoUploadResult: LiveData<Resource<String>> = _photoUploadResult

    fun fetchUserSettings() {
        viewModelScope.launch {
            _userSettings.postValue(Resource.Loading())
            try {
                val response = repository.getUserSettings()
                _userSettings.postValue(Resource.Success(response))
            } catch (e: Exception) {
                _userSettings.postValue(Resource.Error("Failed to fetch user settings: ${e.message}"))
            }
        }
    }

    fun uploadProfilePhoto(photoFile: File, slotIndex: Int) {
        viewModelScope.launch {
            _photoUploadResult.postValue(Resource.Loading())
            try {
                val response = repository.uploadProfilePhoto(photoFile, slotIndex)
                _photoUploadResult.postValue(Resource.Success(response))
            } catch (e: Exception) {
                _photoUploadResult.postValue(Resource.Error("Upload failed: ${e.message}"))
            }
        }
    }

    // --- HYBRID SCANNING ORCHESTRATION ---

    /**
     * Starts a long-range Geo-query and posts the results to the SharedScanViewModel.
     * This is called when the user wants to scan beyond the immediate BLE range.
     */
    fun startGeoScan(sharedViewModel: SharedScanViewModel) {
        viewModelScope.launch {
            sharedViewModel.postGeoUsers(Resource.Loading())

            // In a real app, you would get the user's actual location here.
            // For now, we use a placeholder.
            val currentUserLocation = GeoPoint(37.7749, -122.4194) // e.g., San Francisco
            val radiusKm = 10.0 // Example: 10km radius

            repository.getNearbyUsersGeo(currentUserLocation, radiusKm)
                .catch { e ->
                    // Handle any errors from the flow
                    sharedViewModel.postGeoUsers(Resource.Error("Geo-scan failed: ${e.message}"))
                }
                .collect { userIds ->
                    // As the flow emits new lists of user IDs, post them to the shared ViewModel
                    sharedViewModel.postGeoUsers(Resource.Success(userIds))
                }
        }
    }
}