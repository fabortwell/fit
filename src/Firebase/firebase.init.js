import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDgP-UGW4hehxycq5Vay7Du9S32GsgynIM",
    authDomain: "fitnes-ninjas.firebaseapp.com",
    projectId: "fitnes-ninjas",
    storageBucket: "fitnes-ninjas.appspot.com",
    messagingSenderId: "531260438348",
    appId: "1:531260438348:web:35e5e7304f8a646ab201e9"
  };
const initializeAunthetication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAunthetication;