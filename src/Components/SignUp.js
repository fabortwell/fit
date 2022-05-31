
import React, {useState} from 'react'
import { signUp } from '../App'


const SignUp = () => {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    function handleSubmit (e) {
    e.preventDefault()
    signUp(email, password).then(res=>console.log(res))
    }

  return (
    <form onSubmit={handleSubmit}>
         <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="enter email" required/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" required/>
        <input type="submit" value="signup"/>
    </form>
  )
}

export default SignUp