import React from 'react';
import ProductCard from './ProductCard';
import './CategorySection.css';

const CategorySection = ({ title, products, id }) => {
    return (
        <section className="category-section" id={id}>
            <h2 className="section-title">{title}</h2>

            {products.length === 0 ? (
                <div className="coming-soon">
                    <h3>COMING SOON</h3>
                    <p>New gear dropping effectively immediately. Stay tuned.</p>
                </div>
            ) : (
                <div className="products-grid">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            collection={product.collection}
                            image={product.image}
                            imageBack={product.imageBack}
                            gender={product.gender}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CategorySection;
