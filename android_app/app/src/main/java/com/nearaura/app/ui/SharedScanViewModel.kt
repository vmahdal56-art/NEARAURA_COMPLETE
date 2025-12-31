package com.nearaura.app.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.nearaura.app.network.Resource

/**
 * A ViewModel scoped to the MainActivity to share scan results between fragments
 * (like RadarFragment) and the main orchestrator (like MainViewModel).
 */
class SharedScanViewModel : ViewModel() {

    // --- BLE Scan Results ---
    // This LiveData will be updated by the RadarFragment/BleManager
    private val _bleDiscoveredUsers = MutableLiveData<Resource<List<String>>>()
    val bleDiscoveredUsers: LiveData<Resource<List<String>>> = _bleDiscoveredUsers

    fun postBleUsers(result: Resource<List<String>>) {
        _bleDiscoveredUsers.postValue(result)
    }

    // --- Geo Scan Results ---
    // This LiveData will be updated by the MainViewModel/GeoFirestore
    private val _geoDiscoveredUsers = MutableLiveData<Resource<List<String>>>()
    val geoDiscoveredUsers: LiveData<Resource<List<String>>> = _geoDiscoveredUsers

    fun postGeoUsers(result: Resource<List<String>>) {
        _geoDiscoveredUsers.postValue(result)
    }

    // --- Combined Results ---
    // You could also add logic here to merge both lists into a single, unified
    // list of nearby users for the UI to observe. For now, we'll keep them separate.
}