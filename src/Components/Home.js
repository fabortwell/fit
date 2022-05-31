import React, { useState } from "react";
import '../App.css';
import Nav from './Nav'
import About from './About';
import Equipment from './Equipment';
import Footer from './Footer'
import Bmi from './Bmi'
import Pricing from './Pricing'
import MapComponent from './MapComponent';
import PayPal from "./Paypal";
import Hero from './Hero'
import app from "../Firebase/firebase";
import { Switch, Route } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";






const auth = getAuth(app);

export function signUp(email, password) {
 return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
  });

}

function App() {
  const [checkout, setCheckOut] = useState(false);
  return (

    <>
    <div>
<Nav />
<Hero />
<About />
<Equipment />
<Bmi />
<Pricing />

 <div>
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          checkout
        </button>
      )}
    </div>
<MapComponent />


<Footer />
    </div>
    </>
  );
}

export default App;

