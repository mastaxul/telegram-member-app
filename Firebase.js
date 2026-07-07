import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdc9dCvorVNcDomWTqTVZog_UrPjXkuVo",
  authDomain: "telegram-member-app.firebaseapp.com",
  projectId: "telegram-member-app",
  storageBucket: "telegram-member-app.firebasestorage.app",
  messagingSenderId: "36732550475",
  appId: "1:36732550475:web:1a46212c17ab0deb33bcce"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
