import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp() {
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName || !email || !password || !confirmPassword) {
            setError('Please fill out all fields.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        axios.post('http://localhost:3001/register', { fullName, email, password, confirmPassword })
            .then((result) => {
                setSuccess('Sign up successful!');
                setError('');
                console.log(result);
            })
            .catch((err) => {
                setError('An error occurred. Please try again.');
                console.error(err);
            });
    };

    return (
        <div className="sign-up-container">
            <form onSubmit={handleSubmit} className="sign-up-form">
                <h2 className="form-title">Sign Up</h2>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        className="form-input"
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="form-input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="form-input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className="form-input"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="form-button">
                    Sign Up
                </button>
                <Link to="/login">
                    <button className="redirect-button">Login</button>
                </Link>
            </form>
        </div>
    );
}

export default SignUp;
