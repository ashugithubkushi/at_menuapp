import React, { useState } from 'react';
import './resetpassword.css'

function Resetpassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    // Example: Password must be at least 8 characters long
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setPasswordError('Passwords do not match');
    } else if (!validatePassword(newPassword)) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
      alert('Password is valid!');
      console.log(newPassword);
    }
  };

  return (
    <div className="resetpassword py-5" style={{ minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 rounded-3 mx-auto p-4">
      <form onSubmit={handleSubmit}>
      <h1></h1>
        <h1 className='text-white text-center'>Reset Password</h1><br />
        <div>
          {/* <label>New Password:</label> */}
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder='New Password'
          />
        </div>
        <br />
        <div>
          {/* <label>Confirm New Password:</label> */}
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder='Confirm Password'
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div><br />
        {/* <button type="submit">Validate</button> */}
        <button
              to="/resetpassword"
              className="border-0 px-3 py-1 text-white fw-small w-100 text-center text-decoration-none fs-5"
              style={{ background: "#5a8077", borderRadius: "5px" }}
              type="submit"
            >
              Change Password
            </button>
      </form>
    </div>
    </div>
  );
}

export default Resetpassword;