import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">WEATHER APP</div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <a href="#">Home</a>
                <a href="https://usage-guide.vercel.app" >Usage Guide</a>
                <a href="https://about-us-lemon-omega.vercel.app/">About Us</a>
                
            </div>
        </div>
    );
};

export default Navbar;
