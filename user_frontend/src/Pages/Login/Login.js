// import React from 'react'
// import CustomInput from '../Component/CustomInput'
// import { Link } from 'react-router-dom'

// const Login = () => {
//   return (
//     <div className="login py-5" style={{ minHeight: '100vh' }}>
//       <br />
//       <br />
//       <div className="loginform my-5 w-25 rounded-3 mx-auto p-4">
        
//         <form action="">
//         <h3 className='text-center text-white'>Login</h3>
//         <p className='text-center text-white'>Login to your account.</p>
//         <br />
//           {/* <CustomInput type="text" label="Email id" id="email" />
//           <CustomInput type="password" label="Password" id="password" /> */}
//           <label htmlFor="" className='email text-white'></label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder='Enter email'
//             required
//           />
//           <br />
//           <br />
//           <label htmlFor="" className='password text-white'></label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder='Enter Password'
//             required
//           />

//           <div className='forgot-password  mt-3 text-end'>
//           <Link to="/forgotpassword">Forgot password?</Link>
//           </div>
//           <Link 
//           to="/listscomponents"
//           className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5'
//           style={{background: "#5a8077" , borderRadius: "5px"}}
//           type='submit'
//           >
//             Login
//           </Link>

//          <br />
//           <br />
//           <h5 className='text-center text-white'>or</h5>
//           <br />
//           <Link 
//           to="/register"
//           className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5'
//           style={{background: "#5a8077" , borderRadius: "5px"}}
//           type='submit'
//           >
//             Register 
//           </Link>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login














// required

// import { Link } from "react-router-dom";
// import "./login.css"
// import React, { useState } from 'react';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

//   const Login = () => {
//     const navigate = useNavigate();

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSubmit = (e) => {
//       e.preventDefault(); // Prevent default form submission behavior
//       console.log('Username:', username);
//       console.log('Password:', password);
//       // Replace with your login logic (e.g., API call)
//     };

//     const Submit = (e) => {
//       e.preventDefault();
//       axios
//         .post("http://localhost:3000/createUser", {
//           username,
//           password,
//         })
//         .then((result) => {
//           console.log(result);
//           navigate("/");
//         })
//         .catch((err) => console.log(err));
//     };
  
//     return (
//       <div className="login py-5" style={{ minHeight: '100vh' }}>
//        <br />
//        <br />
//        <div className="loginform my-5 w-25 rounded-3 mx-auto p-4">
      
//         <form onSubmit={handleSubmit}>
//         <h1 className="text-center text-white p-3">Login Page</h1>
//         <br />
//           <label htmlFor="username"></label>
//           <input 
//            className="mb-4"
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter Email"
//             required
//           />
//           <label htmlFor="password"></label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Password"
//             required
//           />

//              <div className='forgot-password  mt-3 text-end'>
//            <Link to="/forgotpassword">Forgot password?</Link>
//            </div>

//          <Link 
//           to="/listscomponents"
//           className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5'
//           style={{background: "#5a8077" , borderRadius: "5px"}}
//           type='submit'
//           onClick={Submit}
//           >
//             Login
//           </Link>

//          <br />
//           <br />
//           <h5 className='text-center text-white'>or</h5>
//           <br />
//           <Link 
//           to="/listcomponents"
//           className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5'
//           style={{background: "#5a8077" , borderRadius: "5px"}}
//           type='submit'
//           >
//             Register 
//           </Link>

//           {/* <Link onClick={Submit} type="button" className="btn btn-success">
//               Login
//             </Link> */}
//         </form>
//         </div>
//         </div>
//     );
//   }
// export default Login



// required1

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password must be at least 8 characters long
//     return password.length >= 8;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEmailError('');
//     setPasswordError('');

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long');
//       return;
//     }

//     // Submit the form or perform further actions
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   const Submit = (e) => {
//           e.preventDefault();
//           axios
//             .post("http://localhost:3000/createUser", {
//               email,
//               password,
//             })
//             .then((result) => {
//               console.log(result);
//               navigate("/");
//             })
//             .catch((err) => console.log(err));
//         };

//   return (
//     <div>
//        <div className="login py-5" style={{ minHeight: '100vh' }}>
//         <br />
//         <br />
//         <div className="loginform my-5 w-25 rounded-3 mx-auto p-4">
      
//       <form onSubmit={handleSubmit}>
//       <h2 className='text-center text-white'>Login Form</h2>
//       <br />
//         <div>
//           {/* <label>Email:</label> */}
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder='Enter email address'
//           />
//           <div className="error">{emailError}</div>
//         </div>

//         <br />
//         <div>
//           {/* <label>Password:</label> */}
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Enter password'
//           />
//           <div className="error">{passwordError}</div>
//         </div>
//         {/* <button type="submit">Login</button> */}
//         <div className='forgot-password  mt-3 text-end'>
//             <Link to="/forgotpassword">Forgot password?</Link>
//             </div>

//           <Link 
//           onClick={Submit}
//           to="/listscomponents"
//           className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5'
//           style={{background: "#5a8077" , borderRadius: "5px"}}
//           type='submit'
//           // onClick={Submit}
//           >
//             Login
//           </Link>

//          <br />
//           <br />
//           <h5 className='text-center text-white'>or</h5>
//           <br />
//           <Link 
//           to="/listcomponents"
//           className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5'
//           style={{background: "#5a8077" , borderRadius: "5px"}}
//           type='submit'
//           >
//             Register 
//           </Link>

//           {/* <Link onClick={Submit} type="button" className="btn btn-success">
//               Login
//             </Link> */}
//       </form>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import './login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [validateFrom, setValidateForm] = useState('');

  const addPosts = async (email , password) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
        email : email,
        password : password,
          userId: Math.random().toString(36).slice(2),
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    });
    let data = await response.json();
  
    setEmail(email);
    setPassword(password);
    // setInputValue(inputValue);
    console.log(data);
    console.log(response.status);
  
  
    if(response.status === 200)
    {
     console.log(setEmail);
     console.log(setPassword); 
    }else {
      validateFrom(true)
    }
  
    
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // if (!validatePassword(password)) {
    //   setPasswordError('Please enter valid password');
    //   return;
    // }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    } else {
      alert('Logged successfully');
      // Navigate('/register');
    }

    // Submit the form or perform further actions
    console.log('Email:', email);
    console.log('Password:', password);
  };


  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createLogin", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        alert("Logged in successfully");
        navigate("/listscomponents");
      })
      .catch((err) => console.log(err));
  };

  return (

    
    <div>
      <div className="login py-5" style={{ minHeight: '100vh' }}>
        <br />
        <br />
        <div className="loginform my-5 w-25 rounded-3 mx-auto p-4">
      
      <form onSubmit={handleSubmit}>
      <h2 className='text-white text-center'>Login Form</h2><br />
        <div>
          {/* <label>Email:</label> */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email address'
          />
          <div className="error">{emailError}</div>
        </div>
        <br />
        <div>
          {/* <label>Password:</label> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
          />
          <div className="error">{passwordError}</div>
        </div>
        {/* <button type="submit">Login</button> */}
        <div className='forgot-password  mt-3 text-end'>
            <Link to="/forgotpassword">Forgot password?</Link>
            </div>

          <button
          className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5'
          style={{background: "#5a8077" , borderRadius: "5px"}}
          type='submit'
          onClick={Submit}
          >
            Login
          </button>

         <br />
          <br />
          <h5 className='text-center text-white'>or</h5>
          <br />
          <Link 
          to="/register"
          className='border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5'
          style={{background: "#5a8077" , borderRadius: "5px"}}
          type='submit'
          >
            Register 
          </Link>

          {/* <Link onClick={Submit} type="button" className="btn btn-success">
              Login
            </Link> */}
      </form>
    </div>
    </div>
    </div>
  );
}

export default Login;
