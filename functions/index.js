const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Penalty for Ghosting/Deception
exports.syncPenalty = functions.https.onCall(async (data, context) => {
    const uid = context.auth.uid;
    const userRef = admin.firestore().collection('users').doc(uid);
    return admin.firestore().runTransaction(async (t) => {
        const doc = await t.get(userRef);
        const newScore = (doc.data().aura || 100) - 50;
        t.update(userRef, { aura: Math.max(0, newScore) });
        return { aura: newScore };
    });
});

// Sync Window Logic
exports.checkSyncWindow = functions.https.onRequest((req, res) => {
    const hour = new Date().getUTCHours();
    const isWindowOpen = (hour === 15 || hour === 21); // Example Sync Windows
    res.status(200).send({ open: isWindowOpen });
});
