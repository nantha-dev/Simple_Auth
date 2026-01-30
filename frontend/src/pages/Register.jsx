import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { username, email, password, confirmPassword } = formData;
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        const userData = {
            name: username, // Map username to name for backend
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', userData);

            if (response.data.success) {
                localStorage.setItem('user', JSON.stringify(response.data));
                toast.success('Registration successful');
                navigate('/');
            }
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            toast.error(message);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="left-panel">
                    <div className="login-info">
                        <h2>Looks like you're new here!</h2>
                        <p>Sign up to get started</p>
                    </div>
                    <div className="login-graphics">
                        {/* This simulates the graphical element often found on the left side */}
                        <svg width="200" height="200" viewBox="0 0 200 200">
                            {/* Abstract representation of shopping/login graphic */}
                            <rect x="20" y="50" width="80" height="100" rx="5" fill="#f0f0f0" opacity="0.5" />
                            <circle cx="120" cy="100" r="60" fill="#fff" opacity="0.3" />
                        </svg>
                    </div>
                </div>

                <div className="right-panel">
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2874f0' }}>Sign Up</h2>
                    <form className="login-form" onSubmit={onSubmit}>
                        <div className="input-material">
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="username">Username</label>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>

                        <div className="input-material">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="email">Email Address</label>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>

                        <div className="input-material">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="password">Password</label>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>

                        <div className="input-material">
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>

                        <p className="terms-text">
                            By continuing, you agree to Flipkart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                        </p>

                        <button type="submit" className="submit-btn" style={{ marginTop: '15px' }}>Register</button>

                        <div className="auth-separator">
                            <span>OR</span>
                        </div>

                        <div className="social-auth">
                            <button type="button" className="social-btn google-btn">
                                Google
                            </button>
                            <button type="button" className="social-btn github-btn">
                                GitHub
                            </button>
                        </div>
                    </form>

                    <div className="new-user-link">
                        <Link to="/login">Existing User? Log in</Link>
                    </div>
                </div>

                <button className="close-btn">✕</button>
            </div>
        </div>
    );
};

export default Register;
