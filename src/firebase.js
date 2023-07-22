import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCEFBoNUCsoOkmRFFMHx1DL008Bxc-i8w0",
    authDomain: "physiotherapyweb.firebaseapp.com",
    projectId: "physiotherapyweb",
    storageBucket: "physiotherapyweb.appspot.com",
    messagingSenderId: "219660466167",
    appId: "1:219660466167:web:a264d1891a2c3d6814e0f2",
    measurementId: "G-CVNGKFMY4S",
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth();
// export { app, auth };

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
