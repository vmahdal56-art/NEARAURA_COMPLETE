package com.nearaura.app.ui

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment
import androidx.fragment.app.activityViewModels
import com.nearaura.app.R
import com.nearaura.app.models.User
import com.nearaura.app.viewmodel.SharedScanViewModel
import com.google.firebase.storage.FirebaseStorage
import com.google.firebase.storage.UploadTask
import com.google.firebase.ktx.Firebase
import com.google.firebase.storage.ktx.storage
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.launch

class RadarFragment : Fragment(R.layout.fragment_radar) {

    private val sharedViewModel: SharedScanViewModel by activityViewModels()
    private val storage by lazy { Firebase.storage }
    private lateinit var adapter: RadarUserAdapter

    // Logic to handle the 40x Multiplier scan
    private fun observeProximityAuras() {
        viewLifecycleOwner.lifecycleScope.launch {
            sharedViewModel.bleDiscoveredUsers.collect { resource ->
                when (resource) {
                    is com.nearaura.app.network.Resource.Success -> {
                        val userList = resource.data ?: emptyList()
                        // FIX: Map User objects to String IDs for the adapter
                        val userIds = userList.map { it.uid }
                        adapter.submitList(userIds)
                    }
                    else -> {
                        // Handle other states if necessary
                    }
                }
            }
        }
    }
}