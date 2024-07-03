import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary mb-5">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand d-flex text-center fs-3">
          Static Pages
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/divisions" className="nav-link">Divisions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/social" className="nav-link">Social</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin" className="nav-link">Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;