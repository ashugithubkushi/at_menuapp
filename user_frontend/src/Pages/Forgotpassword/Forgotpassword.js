import React, { useState } from 'react';
import './forgotpassword.css'
function Forgotpassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setEmailError('');
      alert('Email is valid!');
      console.log(email)
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  return (
    <div className="forgotpassword py-5" style={{ minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 rounded-3 mx-auto p-4">
      <form onSubmit={handleSubmit}>
      <h1 className='text-white text-center'>Email Validation</h1>
        <div><br />
          {/* <label>Email:</label> */}
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder='Email'
          />
          {emailError && <div className="error">{emailError}</div>}
        </div> <br />
        {/* <button type="submit">Validate</button> */}
        <button
              to="/resetpassword"
              className="border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5"
              style={{ background: "#5a8077", borderRadius: "5px" }}
              type="submit"
            >
              Validate
            </button>
      </form>
    </div>
    </div>

  );
}

export default Forgotpassword;