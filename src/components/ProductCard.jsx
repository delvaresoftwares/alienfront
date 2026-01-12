import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ title, collection, image, imageBack }) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="card-container">
            <Link to={`/product/${slug}`} className="card-link">
                <div className="card-wrapper">
                    <div className="card-bg">
                        <span className="card-collection">{collection}</span>
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
