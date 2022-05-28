import React from 'react';

import './App.css';
import Nav from './Components/Nav'
import About from './Components/About';
import Equipment from './Components/Equipment';
import Footer from './Components/Footer'
import Bmi from './Components/Bmi'
import Pricing from './Components/Pricing'
import MapComponent from './Components/MapComponent';
import { render } from "react-dom";
import { LoadScript } from "@react-google-maps/api";






function App() {
  return (
    <div>
<Nav />
<About />
<Equipment />
{/* <Bmi /> */}
<Pricing />
<MapComponent />
<Footer />
    </div>
  );
}

export default App;
