import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategorySection from './CategorySection'; // Reuse for recommendations
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('M');
    const [isAdded, setIsAdded] = useState(false);

    // Find product by id
    const product = products.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === id);

    if (!product) return <div className="not-found">Product not found <button onClick={() => navigate('/')}>Go Back</button></div>;

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    // Filter Similar Products (Same Type, Exclude Current)
    const similarProducts = products
        .filter(p => p.type === product.type && p.title !== product.title)
        .slice(0, 3);

    // Filter Other Categories (Different Type)
    const otherProducts = products
        .filter(p => p.type !== product.type)
        .slice(0, 3);

    return (
        <div className="product-detail-container">
            <button className="back-btn" onClick={() => navigate('/')}>← Back</button>

            <div className="detail-wrapper">
                <div className="detail-image-container">
                    <img src={product.image} alt={product.title} className="detail-image" />
                </div>

                <div className="detail-info">
                    <h1 className="detail-title">{product.title}</h1>
                    <p className="detail-collection">Collection: {product.collection}</p>
                    <p className="detail-price">${product.price?.toFixed(2) || "89.00"}</p>

                    <p className="detail-desc">
                        {product.description || `Experience the future of streetwear with the ${product.title}. Premium cotton blend, futuristic cut, and the signature Alienhill aesthetic.`}
                    </p>

                    <div className="spec-section">
                        <h3 className="spec-title">Specifications</h3>
                        <table className="spec-table">
                            <tbody>
                                <tr>
                                    <td>Material</td>
                                    <td>{product.specs?.material || "100% Organic Cotton"}</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{product.specs?.weight || "240 GSM"}</td>
                                </tr>
                                <tr>
                                    <td>Fit</td>
                                    <td>{product.specs?.fit || "Oversized / Streetwear Fit"}</td>
                                </tr>
                                <tr>
                                    <td>Print</td>
                                    <td>{product.specs?.print || "High-Density Puff Print"}</td>
                                </tr>
                                <tr>
                                    <td>Origin</td>
                                    <td>{product.specs?.origin || "Earth"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="action-area">
                        <div className="size-selector">
                            <span>Size:</span>
                            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <button
                            className="add-cart-btn mobile-sticky"
                            onClick={() => navigate('/checkout', { state: { product: { ...product, size: selectedSize } } })}
                        >
                            <span className="btn-text">
                                BUY NOW - ${product.price?.toFixed(2) || "89.00"}
                            </span>
                        </button>

                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <div className="recommendations">
                {similarProducts.length > 0 && (
                    <CategorySection title="SIMILAR VIBES" products={similarProducts} id="similar" />
                )}

                {otherProducts.length > 0 && (
                    <CategorySection title="EXPLORE MORE" products={otherProducts} id="others" />
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
