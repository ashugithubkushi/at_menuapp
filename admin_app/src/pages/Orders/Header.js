// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ showCounts, pendingCount, inProgressCount, orderedCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">Your Logo</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {showCounts && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/pending">
                    Pending {pendingCount > 0 && <span className="badge bg-primary">{pendingCount}</span>}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/in-progress">
                    In Progress {inProgressCount > 0 && <span className="badge bg-warning">{inProgressCount}</span>}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ordered">
                    Ordered {orderedCount > 0 && <span className="badge bg-success">{orderedCount}</span>}
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <button className="btn btn-outline-primary me-2" type="button">User Name</button>
              <Link className="btn btn-outline-danger" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
