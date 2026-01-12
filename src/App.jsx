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


// Import policy pages
import Contact from './components/policies/Contact';
import Terms from './components/policies/Terms';
import Refunds from './components/policies/Refunds';

const Home = ({ products }) => {
  // ... no changes to Home component implementation ...
};

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
