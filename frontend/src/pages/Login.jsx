import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password })
            
            if (res.data.success) {
                localStorage.setItem('user', JSON.stringify(res.data))
                toast.success('Welcome back!')
                navigate('/')
            }
        } catch (err) {
            const msg = err.response?.data?.message || 'Login failed'
            toast.error(msg)
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="left-panel">
                    <div className="login-info">
                        <h2>Login</h2>
                        <p>Access your Orders, Wishlist and recommendations</p>
                    </div>
                    <div className="login-graphics">
                        <svg width="200" height="200" viewBox="0 0 200 200">
                            <rect x="20" y="50" width="80" height="100" rx="5" fill="#fff" opacity="0.2" />
                            <circle cx="120" cy="100" r="60" fill="#fff" opacity="0.1" />
                        </svg>
                    </div>
                </div>

                <div className="right-panel">
                    <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#2874f0' }}>Sign In</h2>
                    
                    <form className="login-form" onSubmit={onSubmit}>
                        <div className="input-material">
                            <input type="email" id="email" value={email} onChange={onChange} required />
                            <label htmlFor="email">Email</label>
                            <span className="bar"></span>
                        </div>

                        <div className="input-material">
                            <input type="password" id="password" value={password} onChange={onChange} required />
                            <label htmlFor="password">Password</label>
                            <span className="bar"></span>
                        </div>

                        <button type="submit" className="submit-btn" style={{marginTop: '10px'}}>
                            Login
                        </button>

                        <div className="auth-separator">
                            <span>OR</span>
                        </div>

                        <div className="social-auth">
                            <button type="button" className="social-btn google-btn">Google</button>
                            <button type="button" className="social-btn github-btn">GitHub</button>
                        </div>

                        <p className="terms-text">
                            By continuing, you agree to the <a href="#">Terms of Use</a>.
                        </p>
                    </form>

                    <div className="new-user-link">
                        <Link to="/register">New here? Create an account</Link>
                    </div>
                </div>
                <button className="close-btn" onClick={() => navigate('/')}>✕</button>
            </div>
        </div>
    )
}

export default Login