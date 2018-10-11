import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const activeStyles = {
  color: '#0bb', 
  fontWeight: 'bold',
}

const Navbar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/" exact activeStyle={activeStyles}>Home </NavLink>
      <NavLink to="/about" activeStyle={activeStyles}>About </NavLink>
      <NavLink to="/contact" activeStyle={activeStyles}>Contact </NavLink>
    </div>
  );
}

export default Navbar;