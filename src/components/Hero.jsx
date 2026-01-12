import React, { useEffect, useState } from 'react';
import './Hero.css';
import heroImg from '../assets/images/hero_cutout.png';

const Hero = ({ onExplore }) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX - innerWidth / 2) / 25;
        const y = (e.clientY - innerHeight / 2) / 25;
        setOffset({ x, y });
    };

    return (
        <section className="hero" onMouseMove={handleMouseMove}>
            <div className="hero-content">
                <h1 className="hero-title">
                    <span>ABDUCT</span> <br />
                    <span className="stroke-text">THE</span> <br />
                    <span>ORDINARY</span>
                </h1>
                <p className="hero-subtitle">ELEVATE YOUR EXISTENCE | COLLECTION 2026</p>
                <button className="cta-button" onClick={onExplore}>EXPLORE</button>
            </div>

            <div className="hero-visual">
                <div className="hero-circle"></div>
                <img
                    src={heroImg}
                    alt="Alienhill Hero"
                    className="hero-img"
                    style={{ transform: `translate(${offset.x * -1}px, ${offset.y * -1}px) scale(1.05)` }}
                />
            </div>
        </section>
    );
};

export default Hero;
