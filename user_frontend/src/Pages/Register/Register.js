import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './register.css';
import axios from "axios"; // Import for potential backend communication

function Register() {
  const navigate = useNavigate();
  const history = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateUsername = (username) => {
    // Example: Username must be at least 4 characters long and alphanumeric
    const regex = /^[a-zA-Z0-9]+$/; // Corrected regular expression
    return username.length >= 4 && regex.test(username);
  };

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

  const validatePassword = (password) => {
    // Example: Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === createPassword;
  };


  const Submit = (e) => {
    e.preventDefault();
  // async function Submit(e){
  //   e.preventDefault();
    // axios
    //   .post("http://localhost:3000/register", {
    //     username,
    //     email,
    //     createPassword,
    //     confirmPassword
    //   })
    //   .then((result) => {
    //     console.log(result);
    //     alert("Registered successfully");
    //     navigate("/");
    //   })
    //   .catch((err) => console.log(err));

  //   try{

  //     await axios.post("http://localhost:3000/register",{
  //         username,email,createPassword
  //     })
  //     .then(res=>{
  //         if(res.data=="exist"){
  //             alert("User already registered")
  //         }
  //         else if(res.data=="notexist"){
  //             history("/",{state:{id:email}})
  //         }
  //     })
  //     .catch(e=>{
  //         alert("wrong details")
  //         console.log(e);
  //     })

  // }
  // catch(e){
  //     console.log(e);

  // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!validateUsername(username)) {
      setUsernameError('Username must be at least 4 characters long and alphanumeric');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(createPassword)) {
      setPasswordError('Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number');
      return;
    }

    if (!validateConfirmPassword(confirmPassword)) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    // Handle successful registration (replace with your backend logic)
    alert('Registered successfully');
    navigate('/'); // Assuming '/' is the login or home page

    // **Optional:** Send registration data to backend using axios
    axios 
    .post("http://localhost:3000/createRegister", {
        username,
        email,
        createPassword,
      })
      .then((response) => {
        console.log(response);
        
        // Handle successful backend response
      //   if(response.data=="exist"){
      //     alert("User already registered")
      // }
      // else if(response.data=="notexist"){
      //     history("/",{state:{id:email}})
      // }
      
      })
      .catch((error) => { 
        console.error(error);
        // Handle registration errors
        // alert("wrong details")
      });
    
  };

  return (
    <div>
      <div className="register py-5" style={{ minHeight: "100vh" }}>
        <br />
        <br />
        <div className="registerform my-5 w-25 rounded-3 mx-auto p-4">
          <form>
            <h1 className='text-white text-center'>Registration Form</h1> <br />

            <div className="registervalue">
              <div>
                {/* <label>Username:</label> */}
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='UserName'
                />
                <div className="error">{usernameError}</div> <br />
              </div>
              <div>
                {/* <label>Email:</label> */}
                <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <div className="error">{emailError}</div><br />
        </div>
        <div>
          {/* <label>Create Password:</label> */}
          <input
            type="password"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            placeholder='Create Password'
          />
          <div className="error">{passwordError}</div><br />
        </div>
        <div>
          {/* <label>Confirm Password:</label> */}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
          />
          <div className="error">{confirmPasswordError}</div><br /><br />
        </div>
        </div> 
        {/* <button type="submit">Register</button> */}

        <Link
              to="/"
              className="border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5"
              style={{ background: "#5a8077", borderRadius: "5px" }}
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </Link>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Register;