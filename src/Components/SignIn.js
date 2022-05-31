
// import React, {useState} from 'react'
// import { signIn } from '../App'

// const SignIn = () => {
//     const [email, setEmail]=useState("")
//     const [password, setPassword]=useState("")
//     function handleSubmit (e) {
//     e.preventDefault()
//     signIn(email, password).then(res=>console.log(res))
//     }

//   return (
//     <form onSubmit={handleSignIn}>
//          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="enter email" required/>
//         <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" required/>
//         <input type="submit" value="signin"/>
//     </form>
//   )
// }

// export default SignIn