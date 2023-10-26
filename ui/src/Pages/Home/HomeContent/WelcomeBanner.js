import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WelcomeBanner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WelcomeBanner() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <>
            <div className='hero' >
                <video autoPlay loop muted className='video-background'>
                    <source src='../vid/intro.mp4' type="video/mp4" />
                </video>
                <div className='all-WelcomeBanner'>
                    <div className='content' >
                        <h1>Abdelmouman</h1>
                        <span>KINDERGARTEN, PRIMARY, MIDDLE SCHOOL & HIGH SCHOOL</span>
                    </div>
                    <div className='quotes' data-aos="fade-up">
                    </div>
                    <div className='button' >
                        <Link to="/contact">
                            <button className='primary-btn'>
                                Contact Us Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomeBanner;
