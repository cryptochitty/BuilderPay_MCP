import React from 'react';
import '/src/styles/herosection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className="herosection__container">
            <h6 className="herosection__subtitle">Support Builders, Fuel Progress</h6>
            <h1 className="herosection__title">
                Discover Builders. Empower Dreams. Donate with <span className="herosection__highlight">Purpose Today</span>
            </h1>
            <div className="herosection__cta">
                <button className="herosection__btn-primary" onClick={() => navigate('/builder-list')}>Explore Builders</button>
                <button
                    className="herosection__btn-primary"
                    onClick={() => navigate('/register-builder')}
                >
                    I'm a Builder
                </button>
                <p className="herosection__cta-desc">
                    Discover passionate builders, explore their projects, and donate easily with crypto to empower their vision.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;