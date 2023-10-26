import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [areButtonsVisible, setAreButtonsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setAreButtonsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setAreButtonsVisible(false);
    };

    return (
        <div className="navbar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ul style={{ display: isHovered ? 'flex' : 'none' }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/SchoolGallery">School Gallery</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
            <div className="icon-navbar" style={{ display: isHovered ? 'none' : 'block', fontSize: '17px' }}>Menu ☰</div>
        </div>
    );
}

export default Navbar;
