// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCxQ1LXpqk_5cuGX0Jx0bkVJDNyQMfnhUI",
    authDomain: "prepellai.firebaseapp.com",
    projectId: "prepellai",
    storageBucket: "prepellai.firebasestorage.app",
    messagingSenderId: "225660052808",
    appId: "1:225660052808:web:edcc8961aebe79a34a3f7d",
    measurementId: "G-HY2QGSLYHX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth=getAuth(app);

export const db=getFirestore(app);