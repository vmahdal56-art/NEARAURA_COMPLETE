const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.syncIntentCommitment = functions.firestore
    .document('users/{userId}')
    .onUpdate(async (change, context) => {
        const newData = change.after.data();
        const previousData = change.before.data();
        const userId = context.params.userId;

        // Detect change in the core Intent Fruit
        if (newData.intent_fruit !== previousData.intent_fruit) {
            const now = admin.firestore.Timestamp.now().toMillis();
            const lastUpdate = previousData.last_intent_timestamp ? 
                               previousData.last_intent_timestamp.toMillis() : 0;
            const FORTY_EIGHT_HOURS = 48 * 60 * 60 * 1000;

            // ENFORCE THE 48-HOUR VAULT
            if (now - lastUpdate < FORTY_EIGHT_HOURS) {
                console.log(`[SECURITY] User ${userId} blocked by 48H Vault.`);
                return db.collection('users').doc(userId).update({
                    intent_fruit: previousData.intent_fruit,
                    vault_violation: true
                });
            }

            // Record the new commitment timestamp
            return db.collection('users').doc(userId).update({
                last_intent_timestamp: admin.firestore.FieldValue.serverTimestamp()
            });
        }
        return null;
    });
