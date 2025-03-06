// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOR2n-x77WFtu7EyhhAP_y5tBSkr_3Yhk",
  authDomain: "netflix-clone-63c84.firebaseapp.com",
  projectId: "netflix-clone-63c84",
  storageBucket: "netflix-clone-63c84.firebasestorage.app",
  messagingSenderId: "534046977938",
  appId: "1:534046977938:web:e267ab3150d32206029b4b"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try {

        const res=await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }

}

const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        alert(error);
    }

}

const logout= async ()=>{
    signOut(auth)
}

export {auth,db,login,logout,signup}