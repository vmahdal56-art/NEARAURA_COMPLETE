const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.syncIntentCommitment = functions.firestore
    .document('users/{userId}')
    .onUpdate(async (change, context) => {
        const newData = change.after.data();
        const previousData = change.before.data();
        if (newData.intent_fruit !== previousData.intent_fruit) {
            const now = admin.firestore.Timestamp.now().toMillis();
            const lastUpdate = previousData.last_intent_timestamp ? previousData.last_intent_timestamp.toMillis() : 0;
            if (now - lastUpdate < 48 * 60 * 60 * 1000) {
                return db.collection('users').doc(context.params.userId).update({
                    intent_fruit: previousData.intent_fruit,
                    vault_violation_flag: true
                });
            }
            return db.collection('users').doc(context.params.userId).update({
                last_intent_timestamp: admin.firestore.FieldValue.serverTimestamp()
            });
        }
        return null;
    });
