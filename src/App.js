import React from 'react';

import './App.css';
import Nav from './Components/Nav'
import About from './Components/About';
import Equipment from './Components/Equipment';
// import Footer from './Components/Footer'
import Bmi from './Components/Bmi'




function App() {
  return (
    <div>
<Nav />
<About />
<Equipment />
<Bmi />
{/* <Footer /> */}
    </div>
  );
}

export default App;
