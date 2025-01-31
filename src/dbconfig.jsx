import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword,
        signOut } from "firebase/auth";

import {addDoc,
        collection,
        getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0K81Ge8pIDvJgCzIMx7ddylzhNt3dmpY",
  authDomain: "netflix-clone-25076.firebaseapp.com",
  projectId: "netflix-clone-25076",
  storageBucket: "netflix-clone-25076.firebasestorage.app",
  messagingSenderId: "788539022756",
  appId: "1:788539022756:web:8c8c6cfffa38df3bcbf531",
  measurementId: "G-L9M8GP5NM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=>{

    try{

        const resp =await createUserWithEmailAndPassword(auth,name,password);   
        const user = resp.user;

        await addDoc(collection(db,"users"),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        })
    }catch(error){
        console.log(error);
        alert(error);
    }

};


const login = async(email,password)=>{
    try{

        await signInWithEmailAndPassword(auth,email,password);

    }catch(error){
        console.log(error);
        alert(error);
    }
};

const logout = async ()=>{
    try{

        signOut(auth);

    }catch(error){
        console.log(error);
        alert(error);
    }
};


export {auth , db ,  signup , signOut , login }