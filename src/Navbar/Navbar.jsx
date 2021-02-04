import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav className="nav">
    <div className="item">
      <NavLink to="/converter" className="itemLink" activeClassName="activeItemLink">Converter</NavLink>
    </div>
    <div className="item">
      <NavLink to="/expencetracker" className="itemLink" activeClassName="activeItemLink">Expence Tracker</NavLink>
    </div>
  </nav>
}

export default Navbar;