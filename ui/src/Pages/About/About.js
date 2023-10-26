import './About.css';
import SchoolMotto from '../Home/HomeContent/SchoolMotto';
import Footer from '../../Com/Footer/Footer';

function About() {
    return (
        <div>
            <div className="hero2">
                <div className="content2">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about-content">
                <h2>About Our School</h2>
                <p>
                    Holder of a benchmark brand in the private education and teaching professions, the Abdelmoumen Institution is regaining its former pace of innovation by beginning a major project to modernize its premises and restructure its teams. educational. Today, it returns under the new name Abdelmoumen Schools, more modern, more adapted to the needs of students and teachers, and perfectly meeting the requirements of parents.
                </p>
            </div>
            <div className="school-motto-container">
                <SchoolMotto />
            </div>
            <div className='content-Num'>
                <div className="background-in">
                    <img src="../../img/icons/test.jpg" alt="Background" />
                </div>
                <div className='Num'>
                    <img src="../../img/icons/wcertified.png" alt="My Icon" />
                    <h2>1960</h2>
                    <h3>Year we founded</h3>
                </div>
                <div className='Num'>
                    <img src="../../img/icons/wteacher.png" alt="My Icon" />
                    <h2>40</h2>
                    <h3>TRUSTED teachers</h3>
                </div>
                <div className='Num'>
                    <img src="../../img/icons/wstudent.png" alt="My Icon" />
                    <h2>4000 +</h2>
                    <h3>All Time Students</h3>
                </div>
                <div className='Num'>
                    <img src="../../img/icons/experience.png" alt="My Icon" />
                    <h2>30</h2>
                    <h3>Experience</h3>
                </div>
            </div>
            <div className='about-footer'>
            <Footer/>
            </div>
        </div>
    );
}

export default About;
