const admin = require('firebase-admin');
exports.processTransaction = async (userId, amountCZK) => {
    const legacyCut = amountCZK * 0.10;
    await admin.firestore().collection('legacy_donations').add({
        userId, amount: legacyCut, cause: "Maggie's Cancer Research", timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
};
