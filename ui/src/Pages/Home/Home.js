import React from 'react';
import WelcomeBanner from './HomeContent/WelcomeBanner';
import SchoolMotto from './HomeContent/SchoolMotto';
import './Home.css'
import Courses from './HomeContent/Courses';
import Footer from '../../Com/Footer/Footer';

function Home() {
    return (
        <>
            <WelcomeBanner/>
            <SchoolMotto />
            <Courses />
            <div className='home-footer'>
            <Footer/>
            </div>
        </>
    );
}

export default Home;
