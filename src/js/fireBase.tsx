import { FirebaseError, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword,
        signOut } from "firebase/auth";

import {addDoc,
        collection,
        getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

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
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
const auth = getAuth(app)
const db = getFirestore(app);

const sign_up = async(name:string,email:string,password:string)=>{

    try{

        console.log('name is :',name+'email is ',email+'pass is :',password);

        const resp =await createUserWithEmailAndPassword(auth,email,password);   
        console.log(resp);
        const user = resp.user;
        console.log(user);


        await addDoc(collection(db,"users"),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        })
    }catch(error){
        if(error instanceof FirebaseError){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
        }

    }

};


const log_in = async(email:string,password:string)=>{
    try{

        await signInWithEmailAndPassword(auth,email,password);

    }catch(error){

        if(error instanceof FirebaseError){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
        }
    }
};

const log_out = async ()=>{
    try{

        signOut(auth);

    }catch(error){
        if(error instanceof FirebaseError){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
        }
        
        
    }
};


export {auth , db ,  sign_up , log_out , log_in }