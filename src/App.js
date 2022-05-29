
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






function App() {
  const [checkout, setCheckOut] = useState(false);
  return (

    <>
      <div className="App">
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
    <div>
<Nav />
<About />
<Equipment />
<Bmi />
<Pricing />

<MapComponent />

<Footer />
    </div>
    </>
  );
}

export default App;

