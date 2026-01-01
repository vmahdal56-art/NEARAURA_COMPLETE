package com.nearaura.app
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.firestore.FirebaseFirestore

class IDVSActivity : AppCompatActivity() {
    private val db = FirebaseFirestore.getInstance()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_idvs)
        findViewById<Button>(R.id.btnSubmitVerification).setOnClickListener {
            val userId = "CURRENT_USER_ID"
            val verificationData = mapOf("isVerified" to false, "hwid" to android.os.Build.ID)
            db.collection("users").document(userId).update(verificationData)
                .addOnSuccessListener { Toast.makeText(this, "Reviewing your soul...", Toast.LENGTH_LONG).show(); finish() }
        }
    }
}
