
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';
import {useEffect, useState } from 'react';
import axios from 'axios';

const Header = ({ showCounts, pendingCount, inProgressCount, orderedCount, toggleSidebar }) => {
  const location = useLocation();
  const username = location.state ? location.state.username : '';

  const [users, setUsers] = useState([]);



  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(response => {
        setUsers(response.data); // Assuming setUsers is a state setter function to update user data
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);
  
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
























// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import './header.css';
// import axios from "axios";

// const Header = ({ showCounts, pendingCount, inProgressCount, orderedCount, toggleSidebar, username }) => {

//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     // Fetch user profile details after login
//     axios.get("/profile")
//         .then((response) => {
//             setUserProfile(response.data.userProfile);
//         })
//         .catch((error) => {
//             console.error(error);
//             // Handle errors
//         });
// }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
//           <MenuIcon />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             {showCounts && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/pending">
//                     Pending <span className={`badge ${pendingCount > 0 ? 'bg-primary' : 'bg-secondary'}`}>{pendingCount}</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/in-progress">
//                     In Progress <span className={`badge ${inProgressCount > 0 ? 'bg-warning' : 'bg-secondary'}`}>{inProgressCount}</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/ordered">
//                     Ordered <span className={`badge ${orderedCount > 0 ? 'bg-success' : 'bg-secondary'}`}>{orderedCount}</span>
//                   </Link>
//                 </li>
//               </>
//             )}
//             <li className="nav-item">
//               {/* <div className="btn btn-outline-primary me-2" type="button">{username}</div> */}


//               <div>
//             <h2>User Profile</h2>
//             {userProfile ? (
//                 <div>
//                     <p>Name: {userProfile.name}</p>
//                     <p>Email: {userProfile.email}</p>
//                     {/* Other profile details */}
//                 </div>
//             ) : (
//                 <p>
//                   {/* Loading... */}
//                   </p>
//             )}
//         </div>

//               <Link className="btn btn-danger" to="/">Logout</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );  
// };

// export default Header;