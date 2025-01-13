import React, {useState}from 'react'
import axios from 'axios'


const SignIn_Up=()=> {
  
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [first_name, setFirstName]= useState('')
  const [last_name, setLastName]= useState('')
  const [username, setUserName]= useState('')

  const handleSubmit= async (e)=> {
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:3001/signup', {first_name, last_name, email, username, password })
      alert(response.data);
    }
    catch (error) {
      if (error.response && error.response.status === 400) {
        alert('username already exists');
      } else {
        alert('Error signing up');
      }
    }
  }

  return (
    <div className='Signin-Container'>

        <div className='banner'>
          <img src='/images/Login_question_with_background.jpg' alt='login picture with students' className='banner-pic'/>
        </div>

        <form onSubmit={handleSubmit} className='Signup-form'>
          <h1 className='heading-registration'>Registration Form</h1>
          <label className='signup-label'>First Name:</label>
          <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} /> 
          <br />
          <label className='signup-label'>Last Name:</label>
          <input type='text' value={last_name} onChange={(e)=>setLastName(e.target.value)} />
          <br />
          <label className='signup-label'>Email:</label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <label className='signup-label'>Username:</label>
          <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)} />
          <br />
          <label className='signup-label'>Password:</label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <button className='btn'type='submit'>Register</button>
        </form>
    </div>
  )
}

export default SignIn_Up