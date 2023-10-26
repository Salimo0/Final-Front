import './Courses.css';

function Courses() {
    return (
        <section className="colums">
            <div className='heading'>
                <h3>COURSES</h3>
                <h1>What We Teach</h1>
            </div>
            <div className='content-grid'>
                <div className='box'>
                    <img src="../../img/icons/math.png" alt="My Icon" />
                    <h1>Mathematics</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/dna.png" alt="My Icon" />
                    <h1>biology</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/flask.png" alt="My Icon" />
                    <h1>Chemistry</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/science.png" alt="My Icon" />
                    <h1>physics</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/history.png" alt="My Icon" />
                    <h1>history</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/geography.png" alt="My Icon" />
                    <h1>geography</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/arabic.png" alt="My Icon" />
                    <h1>Languages</h1>
                    <span>Arabic,Français,English</span>
                </div>
                <div className='box'>
                    <img src="../../img/icons/islam.png" alt="My Icon" />
                    <h1>Islamic Studies</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/thought.png" alt="My Icon" />
                    <h1>philosophy</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/art.png" alt="My Icon" />
                    <h1>Art</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/music.png" alt="My Icon" />
                    <h1>Music</h1>
                </div>
                <div className='box'>
                    <img src="../../img/icons/balls.png" alt="My Icon" />
                    <h1>sport</h1>
                </div>
            </div>
        </section>
    );
}

export default Courses;
