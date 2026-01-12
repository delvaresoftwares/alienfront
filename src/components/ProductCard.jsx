import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ title, collection, image, imageBack, gender }) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    const isMen = gender?.includes('men');
    const isWomen = gender?.includes('women');

    return (
        <div className="card-container">
            <Link to={`/product/${slug}`} className="card-link">
                <div className="card-wrapper">
                    <div className="card-bg">
                        <span className="card-collection">{collection}</span>
                        {/* Gender Symbols */}
                        <div className="gender-icon">
                            {isMen && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00BAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="10" cy="14" r="6"></circle>
                                    <line x1="20" y1="4" x2="14.5" y2="9.5"></line>
                                    <polyline points="15 4 20 4 20 9"></polyline>
                                </svg>
                            )}
                            {isWomen && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF00CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: isMen ? '5px' : '0' }}>
                                    <circle cx="12" cy="9" r="6"></circle>
                                    <line x1="12" y1="15" x2="12" y2="23"></line>
                                    <line x1="9" y1="19" x2="15" y2="19"></line>
                                </svg>
                            )}
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={image} alt={title} className="card-img front" />
                        {imageBack && <img src={imageBack} alt={`${title} Back`} className="card-img back" />}
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">{title}</h3>
                        <button className="card-btn">VIEW</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
