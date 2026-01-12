import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import OrderStatus from './components/OrderStatus';
import './App.css';

// Import Data
import allProducts from './data/products';


// Import policy pages
import Contact from './components/policies/Contact';
import Terms from './components/policies/Terms';
import Refunds from './components/policies/Refunds';

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
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid #222',
        color: '#666',
        background: '#0a0a0a'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#888', fontSize: '0.9rem' }}>Contact Us</Link>
          <Link to="/terms" style={{ textDecoration: 'none', color: '#888', fontSize: '0.9rem' }}>Terms & Conditions</Link>
          <Link to="/refunds" style={{ textDecoration: 'none', color: '#888', fontSize: '0.9rem' }}>Refund Policy</Link>
        </div>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refunds" element={<Refunds />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
