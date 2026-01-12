import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import OrderStatus from './components/OrderStatus';
import './App.css';

// Import Data
import allProducts from './data/products';

const Home = ({ products }) => {
  const [filter, setFilter] = useState('fashion');

  // Function to handle category selection from Header
  const handleCategorySelect = (category) => {
    setFilter(category);
    // Scroll to products
    const section = document.getElementById('products-anchor');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExplore = () => {
    setFilter('all');
    const section = document.getElementById('products-anchor');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter products
  const displayedProducts = filter === 'all'
    ? products
    : products.filter(p => p.type === filter);

  return (
    <>
      <Header onCategorySelect={handleCategorySelect} />
      <Hero onExplore={handleExplore} />

      <main id="products-anchor">
        {/* If filter is all or fashion, show standard fashion grid items */}
        <CategorySection
          id="main-grid"
          title={filter === 'all' ? "ALL PRODUCTS" : (filter === 'fashion' ? "CLOTHING COLLECTIONS" : "APPARELS & GEAR")}
          products={displayedProducts}
        />
      </main>

      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #222',
        color: '#666'
      }}>
        <p>&copy; 2026 ALIENHILL. Designed by GEMINI.</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home products={allProducts} />} />
          <Route path="/product/:id" element={<ProductDetail products={allProducts} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-status" element={<OrderStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
