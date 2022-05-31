
import React, { useState } from "react";
import app from "./Firebase/firebase";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import SignUp from "./Components/SignUp";
// import SignIn from "./Components/SignIn";
import Equipment from "./Components/Equipment";
import About from "./Components/About";
import Pricing from "./Components/Pricing";






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



// export function signIn(email, password) {
 
// return signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     console.log(errorCode)
//     const errorMessage = error.message;
//     console.log(errorMessage)
//   });
// }

function App() {
  const [checkout, setCheckOut] = useState(false);
  return (
<Switch>
  <Route path="/" exact>
  <Home/>
  </Route>

  <Route path="/signup" exact>
  <SignUp/>
  </Route>



  <Route path="/about">
  <About/>
  </Route>

  <Route path="/equipment">
  <Equipment/>
  </Route>

  <Route path="/pricing">
  <Pricing/>
  </Route>

  {/* <Route path="/calculate-bmi">
  <Bmi/>
  </Route> */}

{/* 
  <Route path="gym">
  <MapComponent/>
  </Route> */}


  {/* <Route path="/signin">
  <SignIn/>
  </Route> */}

  {/* <Route path="/about" exact>
  <About/>
  </Route>


  <Route path="/equipment" exact>
  <equipment/>
  </Route> 


  {/* <Route path="/bmi">
  <Bmi/>
  </Route> */}

</Switch>

  );
}

export default App;

