package com.nearaura.app

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    // THE SOVEREIGN EIGHT - Administrative Authority
    private val DIRECTORS = listOf("JV", "JM", "PM", "LA", "LH", "YM", "VM")
    private var currentUserInitials = "" // Will be pulled from Firebase Auth/Profile

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Initial Identity Check
        checkSovereignStatus()
    }

    private fun checkSovereignStatus() {
        if (DIRECTORS.contains(currentUserInitials)) {
            enableOracleMode()
        }
    }

    private fun enableOracleMode() {
        // Unlocks 40x Boost, Oracle Range, and 48h Vault Bypass
        Toast.makeText(this, "Welcome Director. Oracle Mode Active.", Toast.LENGTH_LONG).show()
    }

    // --- IZS SHIELD TRIGGER ---
    fun triggerIZS(category: String) {
        // Logic to package GPS + Name + Phone and push to Realtime Database
        // This is the implementation of the life-saving mission
    }
}
