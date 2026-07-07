import { db } from "./firebase.js";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const tg = window.Telegram.WebApp;

tg.ready();

const user = tg.initDataUnsafe.user;

if (user) {

    const userRef = doc(db, "users", String(user.id));

    const snap = await getDoc(userRef);

    if (!snap.exists()) {

        await setDoc(userRef, {

            telegramId: user.id,
            firstName: user.first_name || "",
            lastName: user.last_name || "",
            username: user.username || "",
            language: user.language_code || "",
            points: 0,
            referrals: 0,
            verified: false,
            memberLevel: "Ahli",
            createdAt: serverTimestamp()

        });

        console.log("Ahli baru berjaya didaftarkan.");

    } else {

        console.log("Ahli sudah wujud.");

    }

}
