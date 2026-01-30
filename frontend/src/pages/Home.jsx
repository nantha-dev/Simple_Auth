import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="home-page">
            <Navbar onLogout={handleLogout} />
            <HeroSection />
            
        </div>
    );
};

export default Home;
