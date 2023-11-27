import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD328moo5lZ0VwcOEptt6vbtp1r0s3BEko",
  authDomain: "fake-api-31ce9.firebaseapp.com",
  projectId: "fake-api-31ce9",
  storageBucket: "fake-api-31ce9.appspot.com",
  messagingSenderId: "675698442572",
  appId: "1:675698442572:web:87c2d315364389aef80fe9",
  measurementId: "G-V7J4DLJXTT"
};


const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp)
const storage=getStorage(firebaseApp)

export {db, storage};