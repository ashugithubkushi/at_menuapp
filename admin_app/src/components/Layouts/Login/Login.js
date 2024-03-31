import { Link, NavLink } from "react-router-dom";
import "./Login.css"
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

  const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      console.log('Username:', username);
      console.log('Password:', password);
      // Replace with your login logic (e.g., API call)
    };

    const Submit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3000/createUser", {
          username,
          password,
        })
        .then((result) => {
          console.log(result);
          navigate("/menu");
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <div className="App">
      
        <form onSubmit={handleSubmit}>
        <h1 className="text-white text-center">Login Page</h1>

        <br />
          {/* <label>Username:</label> */}
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          
          {/* <label>Password:</label> */}
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          {/* <button type="submit">Log In</button> */}
          <button onClick={Submit} type="button" className="btn btn-success">
              Login
            </button>
        </form>

  
      </div>
    );
  }

  

export default Login
