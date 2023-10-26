import React from 'react';
import './SchoolMotto.css';

function SchoolMotto() {
    return (
        <div className='HoAbout'>
            <div className='leftimg'>
                <img src="./img/about.jpg" alt="Background" className="background-img" />
            </div>
            <div className="part-two">
                <div className="content">
                    <h3>OUR CHALLENGE - YOUR SUCCESS</h3>
                    <h1>Building Brighter Tomorrows</h1>
                    <div className="item-flexSB">
                        <div className="imges">
                            <img src="../../img/icons/book.png" alt="My Icon" />
                        </div>
                        <div className='text'>
                            <h2>Integral Training</h2>
                            <p>A thorough, universal, and integral education for our students is something we can assure.</p>
                        </div>
                    </div>
                    <div className="item-flexSB2">
                        <div className="imges">
                            <img src="../../img/icons/cert.png" alt="My Icon" />
                        </div>
                        <div className='text2'>
                            <h2>Excellency</h2>
                            <p>Aim for greatness by selecting a qualified teaching staff that can guarantee conducive learning environments.</p>
                        </div>
                    </div>
                    <div className="item-flexSB3">
                        <div className="imges">
                            <img src="../../img/icons/tran.png" alt="My Icon" />
                        </div>
                        <div className='text3'>
                            <h2>Transcendence</h2>
                            <p>Our responsibility is to assist our students in discovering their best selves.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SchoolMotto;
