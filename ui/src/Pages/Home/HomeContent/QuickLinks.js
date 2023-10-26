import React from 'react';
import './QuickLinks.css'; 
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function QuickLinks() {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 0.1, 
            smooth: 'easeInOutQuart', 
        });
    };

    return (
        <div className="allbtn">
            <Link to='/About' onClick={scrollToTop}>
                <button className='btn'>
                <img  className='us' src='./img/aboutus.png' alt='aboutus' />
                    <h1>About Us</h1>
                    <p className='btn-description'>
                        Display school contact information, include a user-friendly form, office hours, directions, map, FAQs, and social media profiles for effective engagement.
                    </p>
                    <img className='arrow' src='./img/ar.png' alt='img' />
                </button>
            </Link>
            <Link to='/SchoolGallery' onClick={scrollToTop}>
                <button className='btn'>
                <img className='us' src='./img/aboutus.png' alt='aboutus' />
                    <h1>SchoolGallery</h1>
                    <p className='btn-description'>
                        This "About Us" section provides a comprehensive overview of the school's mission, vision, contact information, office hours, directions, FAQs, and social media presence. It aims to convey the school's commitment to excellence and engagement with its community.
                    </p>
                    <img className='arrow' src='./img/ar.png' alt='img' />
                </button>
            </Link>
            <Link to='/Contact' onClick={scrollToTop}>
                <button className='btn'>
                <img className='us' src='./img/aboutus.png' alt='aboutus' />
                    <h1>Contact</h1>
                    <p className='btn-description'>
                        Display school contact information, include a user-friendly form, office hours, directions, map, FAQs, and social media profiles for effective engagement.
                    </p>
                    <img className='arrow' src='./img/ar.png' alt='img' />
                </button>
            </Link>
        </div>
    );
}

export default QuickLinks;
