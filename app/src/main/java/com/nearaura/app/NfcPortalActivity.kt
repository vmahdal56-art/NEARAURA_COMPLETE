package com.nearaura.app

import android.content.Intent
import android.nfc.NfcAdapter
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class NfcPortalActivity : AppCompatActivity() {

    private var nfcAdapter: NfcAdapter? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main) // Použijeme hlavní layout jako základ

        nfcAdapter = NfcAdapter.getDefaultAdapter(this)

        if (nfcAdapter == null) {
            Toast.makeText(this, "NFC is not available on this device.", Toast.LENGTH_LONG).show()
            finish()
            return
        }

        handleIntent(intent)
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        handleIntent(intent)
    }

    private fun handleIntent(intent: Intent) {
        val action = intent.action
        if (NfcAdapter.ACTION_NDEF_DISCOVERED == action || 
            NfcAdapter.ACTION_TECH_DISCOVERED == action || 
            NfcAdapter.ACTION_TAG_DISCOVERED == action) {
            
            // Portál rozpoznán - Aktivace Jarmilina štítu
            activateJarmilaShield()
        }
    }

    private fun activateJarmilaShield() {
        Toast.makeText(this, "Jarmila Portal Detected. Activating Shield...", Toast.LENGTH_LONG).show()
        
        // Okamžitý přechod do IZS Menu
        val intent = Intent(this, EmergencyActivity::class.java)
        intent.putExtra("trigger", "NFC_JARMILA_HEART")
        startActivity(intent)
    }
}
