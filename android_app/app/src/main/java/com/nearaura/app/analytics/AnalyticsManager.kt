package com.nearaura.app.analytics

import android.os.Bundle
import com.google.firebase.analytics.FirebaseAnalytics
import com.google.firebase.analytics.ktx.analytics
import com.google.firebase.ktx.Firebase

class AnalyticsManager {

    private val firebaseAnalytics: FirebaseAnalytics = Firebase.analytics

    fun trackInstall() {
        val bundle = Bundle()
        bundle.putString(FirebaseAnalytics.Param.SOURCE, "youtube")
        firebaseAnalytics.logEvent(FirebaseAnalytics.Event.APP_OPEN, bundle)
    }

    fun trackUserVerified() {
        firebaseAnalytics.logEvent("user_verified", null)
    }
}
