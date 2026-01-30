import React from 'react';

const BottomSection = () => {
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

    const dropdownCategories = [
        { name: 'Books & Stationery', icon: 'fas fa-book' },
        { name: 'Car & Bike Accessories', icon: 'fas fa-car' },
        { name: 'Travel', icon: 'fas fa-plane' },
        { name: 'Medicines', icon: 'fas fa-prescription-bottle' },
        { name: 'Gaming', icon: 'fas fa-gamepad' },
        { name: 'Pet Supplies', icon: 'fas fa-paw' },
    ];

    return (
        <div className="navbar-bottom">
            <div className="categories">
                {mainCategories.map((category, index) => (
                    <a href="#" key={index} className="category-item">
                        <i className={category.icon}></i>
                        <span>{category.name}</span>
                    </a>
                ))}
                
                <div className="more-dropdown">
                    <a href="#" className="category-item">
                        <i className="fas fa-ellipsis-h"></i>
                        <span>More</span>
                        <i className="fas fa-chevron-down" style={{ marginLeft: '5px', fontSize: '12px' }}></i>
                    </a>
                    <div className="dropdown-content">
                        {dropdownCategories.map((category, index) => (
                            <a href="#" key={index} className="dropdown-item">
                                <i className={category.icon}></i>
                                <span>{category.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;