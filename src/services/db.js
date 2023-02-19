import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCGCRe20R7MM_9rqTJresmUCZ37XSWDA0M",
    authDomain: "beeasy-1658868461431.firebaseapp.com",
    databaseURL: "https://beeasy-1658868461431-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "beeasy-1658868461431",
    storageBucket: "beeasy-1658868461431.appspot.com",
    messagingSenderId: "400893868198",
    appId: "1:400893868198:web:59820a6ca40ffe972fdc67",
    measurementId: "G-G3T2P4RKF6"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);