import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';

const Header = ({ showCounts, pendingCount, inProgressCount, orderedCount, toggleSidebar, username }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
              {/* <div className="btn btn-outline-primary me-2" type="button">{username}</div> */}
              <Link className="btn btn-outline-danger" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
};

export default Header;
