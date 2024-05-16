import React, { useEffect, useState } from 'react';
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();

  const [users, setUsers] = useState([]);


  const userData = JSON.parse(localStorage.getItem("user"));

 



  
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="navbar-fixed">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <b><h1 className='text'>ATMOS</h1></b>

        <div className='form d-flex'>
          <form className="custom-search-form d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <div className="nav-item rounded border">
              <a className="nav-link text-dark p-2" aria-current="page" href="#">
                <i className='bi bi-search' style={{border: "none"}}></i>
              </a>
            </div>
          </form>

          <div className='d-flex align-items-center'>

<div className=''>
      <h4 className='m-2' >Welcome, {userData.username}!</h4>
      <p className='m-2' >Email: {userData.email}</p>
      {/* Display other user information */}
    </div>
            <Link className="btn btn-danger m-2 p-2" to="/">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
