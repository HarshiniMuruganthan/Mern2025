import  { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Signup() {
  var [firstname, setFirstname] = useState('');
  var [lastname, setLastname] = useState('');
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  const navigate= useNavigate();

  const handleSignup=async(event)=>{
    event.preventDefault();
   
    try{
      console.log("Event triggered");
      const req = axios.post("http://localhost:3001/signup",{
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    })
   console.log(req);
  
    navigate('/Login');

  }catch(err){
      console.log(err)
  }
}

  return (
    <div>
      <form method ="POST" onSubmit={handleSignup}>
          <label>Firstname:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          /><br/>
          <label>Lastname:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          /><br/>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br/>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br/>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br/>
          
        <button onClick={handleSignup}>Signup</button>
        </form>
        <p>
          Already have account??<a href="/Login">Login</a>
        </p>
    </div>
  )
}

export default Signup;