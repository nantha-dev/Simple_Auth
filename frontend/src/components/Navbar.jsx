import React, { useState, useEffect } from 'react';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import MobileMenu from './MobileMenu';

const Navbar = ({ onLogout }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(2);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll for shadow effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    // Add item to cart
    const addToCart = () => {
        setCartCount(prev => prev + 1);
    };

    // Handle search
    const handleSearch = (searchTerm) => {
        alert(`Searching for: "${searchTerm}"`);
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <TopSection
                    cartCount={cartCount}
                    onSearch={handleSearch}
                    onToggleMobileMenu={toggleMobileMenu}
                    onLoginClick={onLogout}
                    onCartClick={() => alert(`Opening cart with ${cartCount} items`)}
                />
                <BottomSection />
            </nav>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Navbar;
