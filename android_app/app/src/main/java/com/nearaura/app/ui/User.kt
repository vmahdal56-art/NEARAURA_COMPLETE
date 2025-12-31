package com.nearaura.app.models

import com.google.firebase.firestore.ServerTimestamp
import java.util.Date

data class User(
    val uid: String = "",
    val name: String = "",
    val bio: String? = null,
    val gender: String? = null,
    val birthDate: String? = null,
    val interests: List<String> = emptyList(),
    val profilePhotoUrls: Map<String, String?> = emptyMap(),
    val isVerified: Boolean = false,
    @ServerTimestamp val lastSeen: Date? = null,

    // Aura Flavors Feature
    val auraFlavors: List<String> = emptyList(), // Corrected from auraFlavor

    // Vibe Check Feature
    val vibeVideoUrl: String = "",

    // Admin Status
    val isAdmin: Boolean = false,

    // Boost Feature
    val isBoosted: Boolean = false,
    @ServerTimestamp val boostExpiresAt: Date? = null,

    // Subscription Feature
    val subscription: Map<String, Any?> = mapOf(
        "tier" to "free",
        "status" to "active",
        "expiresAt" to null,
        "provider" to null
    )
)
