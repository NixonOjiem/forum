import React, {useState}from 'react'
import axios from 'axios'

const SignIn_Up=()=> {
  
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [first_name, setFirstName]= useState('')
  const [last_name, setLastName]= useState('')
  const [username, setUserName]= useState('')

  const handleSubmit=()=>{
    axios.post('http://localhost:3001/api/users', {})
  }

  return (
    <div className='Signin-Container'>
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <label>First Name:</label>
          <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} /> 
          <br />
          <label>Last Name:</label>
          <input type='text' value={last_name} onChange={(e)=>setLastName(e.target.value)} />
          <br />
          <label>Email:</label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <label>Username:</label>
          <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)} />
          <br />
          <label>Password:</label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <button className='btn'type='submit'>Register</button>
        </form>
    </div>
  )
}

export default SignIn_Up