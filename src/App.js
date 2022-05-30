
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

