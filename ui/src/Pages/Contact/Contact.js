import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Footer from '../../Com/Footer/Footer';

function Contact() {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/contact', formData);
            setFormSubmitted(true);
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting contact form');
        }
    };

    return (
        <>
            <div className="contact-container">
                <h1>Contact Us</h1>
                <div className="map-container">
                    <iframe
                        className="map"
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.975830172185!2d-7.628021919421787!3d33.566086036198804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d39ae095046d%3A0xd2475223a4d58950!2sEcoles%20Abdelmoumen!5e1!3m2!1sen!2sma!4v1697229343010!5m2!1sen!2sma"
                        width="100%"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="form">
                    <h2>Enter Your Information</h2>
                    {formSubmitted && <div className="success-message">Form submitted successfully!</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='contact-footer'>
                <Footer />
            </div>
        </>
    );
}

export default Contact;
