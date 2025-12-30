const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ region: "us-central1" });

const DIRECTORS = ['JV', 'JM', 'PM', 'LA', 'LH', 'YM', 'VM'];

exports.onUserCreated = onDocumentCreated("users/{userId}", (event) => {
    const snapshot = event.data;
    if (!snapshot) return null;
    return snapshot.ref.set({
        auraBalance: 100,
        status: "active",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        lastIntentUpdate: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
});

exports.updateUserIntent = onCall(async (request) => {
    if (!request.auth) throw new HttpsError('unauthenticated', 'The Orchard requires entry.');

    const { newIntent, initials } = request.data;
    const uid = request.auth.uid;
    const userRef = admin.firestore().collection('users').doc(uid);

    return admin.firestore().runTransaction(async (t) => {
        const doc = await t.get(userRef);
        const data = doc.data();
        const now = admin.firestore.Timestamp.now();
        const isDirector = DIRECTORS.includes(initials);

        if (!isDirector && data.lastIntentUpdate) {
            const diff = (now.toDate() - data.lastIntentUpdate.toDate()) / (1000 * 60 * 60);
            if (diff < 48) throw new HttpsError('failed-precondition', 'Vault is locked for 48H.');
        }

        const hasSerious = newIntent.includes('Pineapple');
        const hasCasual = newIntent.includes('Banana') || newIntent.includes('Peach');
        if (hasSerious && hasCasual) throw new HttpsError('invalid-argument', 'Integrity Violation.');

        t.update(userRef, { 
            intents: newIntent, 
            lastIntentUpdate: now, 
            isSovereign: isDirector 
        });
        return { success: true, isDirector };
    });
});

exports.getLaunchStats = onCall(async (request) => {
    const stats = await admin.firestore().collection('stats').doc('launch').get();
    return stats.data() || { remainingSpots: 500 };
});
