import React from 'react';
import ProductCard from './ProductCard';
import './CategorySection.css';

const CategorySection = ({ title, products, id }) => {
    return (
        <section className="category-section" id={id}>
            <h2 className="section-title">{title}</h2>
            <div className="products-grid">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        collection={product.collection}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
