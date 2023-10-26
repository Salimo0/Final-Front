import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; 

function Logo() {
    const facebookUrl = 'https://www.facebook.com/ecolesabdelmoumen';
    const instagramUrl = 'https://www.instagram.com/ecolesabdelmoumen/';
    const whiteIconStyle = { color: 'white' };

    return (
        <>
            <section className='head'>
                <div className='container flexSB'>
                    <div className='logo'>
                        <Link to="/">
                        <img src='./img/logoo.png' alt='Logo' style={{ width: '200px', height: 'auto', position: 'absolute', top:'-5px', left:'10px' }} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Logo;
