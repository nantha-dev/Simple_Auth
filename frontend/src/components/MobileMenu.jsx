import React, { useState } from 'react';

const MobileMenu = ({ isOpen, onClose }) => {
    const [showMore, setShowMore] = useState(false);

    const mainCategories = [
        { name: 'Mobiles', icon: 'fas fa-mobile-alt' },
        { name: 'Televisions', icon: 'fas fa-tv' },
        { name: 'Laptops', icon: 'fas fa-laptop' },
        { name: 'Fashion', icon: 'fas fa-tshirt' },
        { name: 'Home & Furniture', icon: 'fas fa-home' },
        { name: 'Sports & Fitness', icon: 'fas fa-dumbbell' },
        { name: 'Beauty & Toys', icon: 'fas fa-gift' },
        { name: 'Grocery', icon: 'fas fa-utensils' },
    ];

    const moreCategories = [
        { name: 'Books & Stationery', icon: 'fas fa-book' },
        { name: 'Car & Bike Accessories', icon: 'fas fa-car' },
        { name: 'Travel', icon: 'fas fa-plane' },
        { name: 'Medicines', icon: 'fas fa-prescription-bottle' },
        { name: 'Gaming', icon: 'fas fa-gamepad' },
        { name: 'Pet Supplies', icon: 'fas fa-paw' },
        { name: 'Electronics', icon: 'fas fa-plug' },
        { name: 'Appliances', icon: 'fas fa-blender' },
    ];

    if (!isOpen) return null;

    return (
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                <div className="mobile-menu-header">
                    <h3>Categories</h3>
                    <button className="mobile-close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                <div className="mobile-categories">
                    {mainCategories.map((category, index) => (
                        <a href="#" key={index} className="mobile-category-item">
                            <i className={category.icon}></i>
                            <span>{category.name}</span>
                        </a>
                    ))}
                    
                    <a 
                        href="#" 
                        className="mobile-category-item"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowMore(!showMore);
                        }}
                    >
                        <i className="fas fa-ellipsis-h"></i>
                        <span>More Categories</span>
                        <i 
                            className={`fas fa-chevron-${showMore ? 'up' : 'down'}`} 
                            style={{ marginLeft: 'auto', fontSize: '12px' }}
                        ></i>
                    </a>
                    
                    {showMore && moreCategories.map((category, index) => (
                        <a href="#" key={index} className="mobile-dropdown-item">
                            <i className={category.icon}></i>
                            <span>{category.name}</span>
                        </a>
                    ))}
                    
                    <div style={{ padding: '20px', borderTop: '1px solid #f0f0f0' }}>
                        <a href="#" className="mobile-category-item">
                            <i className="fas fa-user-circle"></i>
                            <span>My Account</span>
                        </a>
                        <a href="#" className="mobile-category-item">
                            <i className="fas fa-shopping-bag"></i>
                            <span>My Orders</span>
                        </a>
                        <a href="#" className="mobile-category-item">
                            <i className="fas fa-heart"></i>
                            <span>My Wishlist</span>
                        </a>
                        <a href="#" className="mobile-category-item">
                            <i className="fas fa-question-circle"></i>
                            <span>Help Center</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;