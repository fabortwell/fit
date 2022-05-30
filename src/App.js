
import React, { useState } from "react";
import './App.css';
import Nav from './Components/Nav'
import About from './Components/About';
import Equipment from './Components/Equipment';
import Footer from './Components/Footer'
import Bmi from './Components/Bmi'
import Pricing from './Components/Pricing'
import MapComponent from './Components/MapComponent';
import PayPal from "./Components/Paypal";
import Hero from './Components/Hero'
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAunthetication from "./Firebase/firebase.init";




initializeAunthetication();
const provider = new GoogleAuthProvider();

const handleGoogleSignIn= () => {
  const auth = getAuth ();

  signInWithPopup (auth, provider)
  .then (result=>{
   const user = result.user
   console.log (user);
  })
  
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
<button onClick={handleGoogleSignIn}>Google Sign in </button>

<Footer />
    </div>
    </>
  );
}

export default App;

