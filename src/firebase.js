import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBI37OFPHWswmAhKKLY1IUk-ZYerGh71j4",
    authDomain: "physiotherapy-eb4bb.firebaseapp.com",
    projectId: "physiotherapy-eb4bb",
    storageBucket: "physiotherapy-eb4bb.appspot.com",
    messagingSenderId: "337785625667",
    appId: "1:337785625667:web:cc2807e7b129b30f2488f6",
    measurementId: "G-2DD6LR514D",
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth();
// export { app, auth };

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
