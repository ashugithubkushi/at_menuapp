
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';
import {useEffect, useState } from 'react';
import axios from 'axios';

const Header = ({ showCounts, pendingCount, inProgressCount, orderedCount, toggleSidebar }) => {
  const location = useLocation();
  const username = location.state ? location.state.username : '';

  const [users, setUsers] = useState([]);



  // useEffect(() => {
  //   axios.get("http://localhost:3000/users")
  //     .then(response => {
  //       setUsers(response.data); // Assuming setUsers is a state setter function to update user data
  //     })
  //     .catch(error => {
  //       console.error("Error fetching users:", error);
  //     });
  // }, []);
  
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(response => {
        const loggedInUser = response.data.find(user => user.username === username);
        if (loggedInUser) {
          setUsers([loggedInUser]); // Display only the logged-in user
        } else {
          console.error("Logged-in user not found in the response data.");
        }
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, [username]);
  
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"
    style={{ backgroundColor: '#fff' }}
    >
          <ul className="navbar-nav ms-auto mb-lg-0">
            {showCounts && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/pending">
                    Pending <span className={`badge ${pendingCount > 0 ? 'bg-primary' : 'bg-secondary'}`}>{pendingCount}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/in-progress">
                    In Progress <span className={`badge ${inProgressCount > 0 ? 'bg-warning' : 'bg-secondary'}`}>{inProgressCount}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ordered">
                    Ordered <span className={`badge ${orderedCount > 0 ? 'bg-success' : 'bg-secondary'}`}>{orderedCount}</span>
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
           
             <div className='d-flex'> <h2 className='text' style={{color: "black"}}>
             {/* <button type="submit" className="search-button">Search</button> */}
             <h4>User profile:</h4>
              {/* <div className="btn btn-outline-primary me-5" type="button">{username}</div> */}
              <div>
      {users.map(user => (
        <h5 key={user._id}> Name - {user.username} <br /> email - {user.email}</h5>
      ))}
    </div>
              </h2>
              </div>
            </li>
            
          </ul>
          <Link className="btn btn-danger float-end" to="/">Logout</Link>
        </div>
      </div>
    </nav>
  );  
};

export default Header;






















