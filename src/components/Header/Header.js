import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <h1>Welcome to Our Library</h1>
            <NavLink to="/home" className="nav-item">Home</NavLink>
            <NavLink to="/services" className="nav-item">Services</NavLink>
            <NavLink to="/library" className="nav-item">Library</NavLink>
            <NavLink to="/about" className="nav-item">About</NavLink>
        </div>
    );
};

export default Header;