import React, { useState, useEffect } from 'react'

const HeroSection = () => {
    const [idx, setIdx] = useState(0)

    const slides = [
        {
            id: 1,
            title: "Big Billion Days",
            subtitle: "Up to 70% Off",
            desc: "Electronics, Fashion, Home & More",
            img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop",
            color: "#ff6b6b"
        },
        {
            id: 2,
            title: "Mobile Mania",
            subtitle: "Starting @ ₹6,999",
            desc: "Latest Smartphones & Accessories",
            img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=400&fit=crop",
            color: "#4ecdc4"
        }
    ]

    useEffect(() => {
        const itv = setInterval(() => {
            setIdx((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(itv)
    }, [idx])

    return (
        <section className="hero-section">
            <div className="hero-carousel">
                <div className="carousel-slides" style={{ transform: `translateX(-${idx * 100}%)` }}>
                    {slides.map(s => (
                        <div key={s.id} className="carousel-slide" style={{ backgroundColor: s.color }}>
                            <div className="slide-content">
                                <div className="slide-text">
                                    <span className="slide-subtitle">{s.subtitle}</span>
                                    <h2 className="slide-title">{s.title}</h2>
                                    <p>{s.desc}</p>
                                    <button className="slide-button">Shop Now</button>
                                </div>
                                <div className="slide-image">
                                    <img src={s.img} alt="hero" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control prev" onClick={() => setIdx(idx === 0 ? slides.length-1 : idx-1)}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="carousel-control next" onClick={() => setIdx((idx + 1) % slides.length)}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            
           
        </section>
    )
}

export default HeroSection