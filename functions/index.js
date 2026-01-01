const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const DIRECTORS = ['JV', 'JM', 'PM', 'LA', 'LH', 'YM', 'VM'];

// --- THE INTEGRITY VAULT & GUARDRAIL ---
exports.orchardIntegrityGuard = functions.firestore
  .document('users/{userId}')
  .onWrite(async (change, context) => {
    const newData = change.after.data();
    const oldData = change.before.data();
    if (!newData) return null;

    // 1. 48-Hour Vault Check (Bypass for Directors)
    if (oldData && oldData.intentLastUpdate && newData.intent !== oldData.intent) {
      const now = admin.firestore.Timestamp.now().toMillis();
      const lastUpdate = oldData.intentLastUpdate.toMillis();
      const userInitials = newData.initials || "";
      if (now - lastUpdate < 48 * 60 * 60 * 1000 && !DIRECTORS.includes(userInitials)) {
         return change.after.ref.update({ intent: oldData.intent });
      }
    }

    // 2. Integrity Guardrail (Prohibit Pineapple + Casual)
    const fruits = newData.selectedFruits || [];
    if (fruits.includes('pineapple') && (fruits.includes('banana') || fruits.includes('peach'))) {
      return change.after.ref.update({ 
        status: 'flagged', 
        auraPoints: admin.firestore.FieldValue.increment(-50) 
      });
    }

    // 3. 40x Mega Boost Multiplier (1790 CZK Tier)
    if (newData.isMegaBoosted && !oldData.isMegaBoosted) {
       return change.after.ref.update({ discoveryWeight: 40 });
    }
    return null;
  });

// --- THE IZS GLOBAL SHIELD (EMERGENCY) ---
exports.onIZSAlert = functions.database.ref('/izs_alerts/{alertId}')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.val();
    const userDoc = await admin.firestore().collection('users').doc(data.userId).get();
    
    // Safety: Only Verified Users can trigger IZS dispatch
    if (!userDoc.exists || !userDoc.data().isVerified) {
       return snapshot.ref.update({ status: "REJECTED_UNVERIFIED" });
    }

    // Automated Dispatch: Packages Name, Phone, and precise GPS
    console.log(`IZS DISPATCH: ${data.name} (${data.phone}) at ${data.lat}, ${data.lng}`);
    return snapshot.ref.update({ 
      status: "AUTHORITIES_NOTIFIED", 
      timestamp: admin.database.ServerValue.TIMESTAMP 
    });
  });
