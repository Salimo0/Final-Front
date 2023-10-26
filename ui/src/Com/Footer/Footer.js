// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const facebookUrl = 'https://www.facebook.com/ecolesabdelmoumen';
    const instagramUrl = 'https://www.instagram.com/ecolesabdelmoumen/';
    const IconStyle = { color: '#1eb2a6', marginRight: '10px', };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-col">
                    <Link to="/">
                        <img src='./img/logoo.png' alt='Logo' style={{ height: "auto", width: "200px", marginTop: "30px" }} />
                    </Link>
                    <div style={{ display: 'flex', marginTop: '-40px', marginLeft: "243px" }}>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faFacebook} style={IconStyle} />
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faInstagram} style={IconStyle} />
                        </a>
                    </div>
                </div>
                <div className="footer-col">
                    <h5 className="footer-heading-e">Explore</h5>
                    <ul className="footer-links">
                        <li>
                            <FontAwesomeIcon icon={faArrowRight} style={IconStyle} />
                            <Link to='/' className='footer-link'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowRight} style={IconStyle} />
                            <Link to='/about' className='footer-link'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowRight} style={IconStyle} />
                            <Link to='/SchoolGallery' className='footer-link'>
                                School Gallery
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowRight} style={IconStyle} />
                            <Link to='/contact' className='footer-link'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h5 className="footer-heading-q">Have a Questions?</h5>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={IconStyle} />
                        <p>Rue de Franceville, Casablanca</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} style={IconStyle} />
                        <p>+212 5228-60148</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} style={IconStyle} />
                        <p>institu.abdel@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                &copy; {new Date().getFullYear()}{' '} rights reserved
            </div>
        </footer>
    );
};

export default Footer;
