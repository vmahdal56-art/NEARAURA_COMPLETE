package com.nearaura.app.ui

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.nearaura.app.R
import com.nearaura.app.analytics.AnalyticsManager
import com.nearaura.app.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private val firestore by lazy { FirebaseFirestore.getInstance() }
    private val auth by lazy { FirebaseAuth.getInstance() }
    private val analyticsManager by lazy { AnalyticsManager() }

    private val discoveryFragment = DiscoveryFragment()
    private val meetupsFragment = MeetupsFragment()
    private val broadcastsFragment = BroadcastsFragment()
    private val chatsFragment = ChatsFragment()
    private val profileFragment = ProfileFragment()
    private val supportFragment = SupportFragment()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        analyticsManager.trackInstall()
        checkVerificationStatus()
        setupDirectorPanel()

        if (savedInstanceState == null) {
            replaceFragment(discoveryFragment)
        }

        binding.bottomNavigationBar.setOnItemSelectedListener { item ->
            when (item.itemId) {
                R.id.navigation_discovery -> replaceFragment(discoveryFragment)
                R.id.navigation_meetups -> replaceFragment(meetupsFragment)
                R.id.navigation_broadcasts -> replaceFragment(broadcastsFragment)
                R.id.navigation_chats -> replaceFragment(chatsFragment)
                R.id.navigation_profile -> replaceFragment(profileFragment)
                R.id.navigation_support -> replaceFragment(supportFragment)
            }
            true
        }
    }

    private fun checkVerificationStatus() {
        val userId = auth.currentUser?.uid
        if (userId == null) {
            // Handle user not logged in, maybe send to login screen
            return
        }
        firestore.collection("users").document(userId).get()
            .addOnSuccessListener { document ->
                if (document != null) {
                    val isVerified = document.getBoolean("isVerified") ?: false
                    val verificationStatus = document.getString("verificationStatus")
                    if (!isVerified) {
                        if(verificationStatus == "rejected") {
                            val intent = Intent(this, IntegrityFailedActivity::class.java)
                            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                            startActivity(intent)
                            finish()
                        } else {
                            val intent = Intent(this, VerificationActivity::class.java)
                            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                            startActivity(intent)
                            finish()
                        }
                    }
                }
            }
            .addOnFailureListener {
                // Handle error, perhaps by logging or showing a message
            }
    }

    private fun setupDirectorPanel() {
        val userId = auth.currentUser?.uid
        if (userId == "YOUR_UID") { // Replace with your actual UID
            binding.directorPanelButton.visibility = View.VISIBLE
            binding.directorPanelButton.setOnClickListener {
                startActivity(Intent(this, DirectorControlPanelActivity::class.java))
            }
        }
    }

    private fun replaceFragment(fragment: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.main_content_frame, fragment)
            .commit()
    }
}
