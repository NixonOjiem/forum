import React, {useState}from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const SignIn_Up=()=> {
  
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [first_name, setFirstName]= useState('')
  const [last_name, setLastName]= useState('')
  const [username, setUserName]= useState('')
  const [showSignup, setShowSignup] = useState(false)
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [successMessage, setSuccessMessage] = useState(''); // State for success messages

  const navigate = useNavigate();

  const handleSignup= async (e)=> {
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:3001/signup', {first_name, last_name, email, username, password })
      alert(response.data);
      setSuccessMessage('Registration successful!');
    }
    catch (error) {
      if (error.response && error.response.status === 400) {
        alert('username already exists');
        setErrorMessage('Username already exists');
      } else {
        alert('Error signing up');
        setErrorMessage('Error signing up');
      }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Calling handlelogin")
    setErrorMessage(''); // Clear previous error messages
    setSuccessMessage(''); // Clear previous success messages
  
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      
      // Assuming the response contains a success message and user data
      if (response.data.userId) {
        setSuccessMessage('Login successful!'); // Set success message
        console.log('Login successful:', response.data); // Log the successful login details
        alert('Login successful! Welcome, ' + response.data.username); // Alert the user
        // Store user data in localStorage or context
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('username_local', response.data.username);
        const isLoggedIn = true;
        // Redirect to another page if needed
        if (isLoggedIn){
          navigate('/forum');
        }
        // navigate('/home'); // Uncomment if using react-router
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid username or password'); // Set error message for invalid credentials
      } else {
        setErrorMessage('An error occurred. Please try again later.'); // General error message
      }
    }
  };

  return (
    <div>{ showSignup? (
      <div className='auth-Container'>

        <div className='banner'>
          <img src='/images/13379598_5210980.jpg' alt='login picture with students' className='banner-pic'/>
        </div>

        <form onSubmit={handleSignup} className='auth-form'>
          <h1 className='heading-registration'>Registration Form</h1>
          <label className='signup-label'>First Name:</label>
          <input type="text" required value={first_name} onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter your first name'className="mordern-input"/> 
          <br />
          <label className='signup-label'>Last Name:</label>
          <input type='text' required value={last_name} onChange={(e)=>setLastName(e.target.value)} placeholder='Enter your last name'className="mordern-input"/>
          <br />
          <label className='signup-label'>Email:</label>
          <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'className="mordern-input"/>
          <br />
          <label className='signup-label'>Username:</label>
          <input type='text' required value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your username'className="mordern-input"/>
          <br />
          <label className='signup-label'>Password:</label>
          <input type='password' required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'className="mordern-input"/>
          <br />
          <button className='btn-sign'type='submit'>Register</button>
          <button className="btn-sign" onClick={() => setShowSignup(false)}>Sign In</button>
        </form>
        
      </div>):(

        <div className='auth-container'>

          <div className='banner'>
            <img src='/images/13379598_5210980.jpg' alt='login picture with students' className='banner-pic'/>
          </div>

          <form onSubmit={handleLogin} className='auth-form'>
            <h1>Sign in</h1>
            <label>Username</label>
            <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter username'className="mordern-input"/>
            <br />
            <label>Password</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'className="mordern-input"/>
            <br />
            <button className='btn-sign'type='submit'>Login</button>
            <button className='btn-sign' onClick={()=>setShowSignup(true)}>Sign Up</button>
          </form>

        </div>
      )
    }
    </div>
  )
}

export default SignIn_Up