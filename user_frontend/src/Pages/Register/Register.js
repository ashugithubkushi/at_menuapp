// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import "./register.css";


// const Register = () => {
//   return (
//     <div>
// <body>
//      <div className="formregister">
//      <form action="">
//      <h1 className='text-center text-white'>Register Here</h1> <br />
//           <label htmlFor="username" className='text-white'>Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             required
//           />
//           <label htmlFor="email" className='text-white'>Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//           />
//           <label htmlFor="password" className='text-white'>Create Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//           />
//           <label htmlFor="password" className='text-white'>Confirm password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//           />
          
//           {/* <NavLink to={"/"}>
//         <button type="button"
//         style={{background: "#5a8077" , borderRadius: "5px"}}
//         >
//               Register
//             </button>
//         </NavLink> */}

//         <br />
//         <br />
//         <Link 
//           to="/"
//           className='border-0 px-3 py-2 text-white fw-small w-100 text-center text-decoration-none fs-5'
//           style={{background: "#5a8077" , borderRadius: "5px"}}
//           type='submit'
//           >
//             Register
//           </Link>
//         </form>
//      </div>
//      </body>
        

     
//     </div>
//   )
// }

// export default Register


import React, { useState } from 'react';
import './register.css';
import axios from "axios";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateUsername = (username) => {
    // Example: Username must be at least 4 characters long
    return username.length >= 4;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Example: Password must be at least 8 characters long
    return password.length >= 8;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === createPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!validateUsername(username)) {
      // setUsernameError('Username must be at least 4 characters long');
      setUsernameError('Username enter user name');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(createPassword)) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    if (!validateConfirmPassword(confirmPassword)) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }
    else {
      alert('Registered successfully');
     
    }

    // Submit the form or perform further actions
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Create Password:', createPassword);
    console.log('Confirm Password:', confirmPassword);
  };

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createRegister", {
        username,
        email,
        createPassword,
        confirmPassword
      })
      .then((result) => {
        console.log(result);
        alert("Registered successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="register py-5" style={{ minHeight: "100vh" }}>
        <br />
        <br />
        <div className="registerform my-5 w-25 rounded-3 mx-auto p-4">
      <form onSubmit={handleSubmit}>
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

        <button
              // to="/register"
              className="border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5"
              style={{ background: "#5a8077", borderRadius: "5px" }}
              type="submit"
              onClick={Submit}
            >
              Register
            </button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Register;
