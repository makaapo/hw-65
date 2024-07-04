import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary mb-5">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex text-center fs-3">
          Static Pages
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/contacts" className="nav-link">Contacts</Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/divisions" className="nav-link">Divisions</Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/social" className="nav-link">Social</Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/admin" className="nav-link">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;