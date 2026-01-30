import React, { useState } from 'react';

const TopSection = ({ 
    cartCount, 
    onSearch, 
    onToggleMobileMenu, 
    onLoginClick, 
    onCartClick 
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit(e);
        }
    };

    const categories = [
        { name: 'Mobiles', icon: 'fas fa-mobile-alt' },
        { name: 'Televisions', icon: 'fas fa-tv' },
        { name: 'Laptops', icon: 'fas fa-laptop' },
        { name: 'Fashion', icon: 'fas fa-tshirt' },
        { name: 'Home & Furniture', icon: 'fas fa-home' },
        { name: 'Sports & Fitness', icon: 'fas fa-dumbbell' },
        { name: 'Beauty & Toys', icon: 'fas fa-gift' },
        { name: 'Grocery', icon: 'fas fa-utensils' },
    ];

    return (
        <div className="navbar-top">
            <button className="mobile-toggle" onClick={onToggleMobileMenu}>
                <i className="fas fa-bars"></i>
            </button>

            <div className="logo-section">
                <a href="#" className="logo">
                    <span className="logo-main">Flipkart</span>
                    <span className="logo-sub">Explore<span className="logo-plus"> Plus</span></span>
                    <span className="logo-explore">
                        <i className="fas fa-plus" style={{ fontSize: '8px' }}></i>
                    </span>
                </a>
            </div>

            <div className="search-section">
                <form onSubmit={handleSearchSubmit} className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for products, brands and more"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button type="submit" className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <div className="action-buttons">
                <button className="action-btn login-btn" onClick={onLoginClick}>
                    <span>Login</span>
                </button>
                <button className="action-btn seller-btn">
                    <span>Become a Seller</span>
                </button>
                <button className="action-btn">
                    <i className="far fa-heart"></i>
                    <span>Wishlist</span>
                </button>
                <button className="action-btn" onClick={onCartClick}>
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </button>
            </div>
        </div>
    );
};

export default TopSection;