import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { load } from '@cashfreepayments/cashfree-js';
import './Checkout.css';
import { getApiBaseUrl, getCashfreeMode } from '../config';

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cashfree, setCashfree] = useState(null);

    const product = state?.product;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    });

    useEffect(() => {
        const initCashfree = async () => {
            const mode = getCashfreeMode();
            const cf = await load({ mode: mode });
            setCashfree(cf);
        };
        initCashfree();

        if (!product) {
            navigate('/');
        }
    }, [product, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!cashfree) {
            setError("Payment SDK failed to load. Please refresh.");
            setLoading(false);
            return;
        }

        try {
            const orderId = `ORDER_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
            const currentUrl = window.location.href;
            const baseUrlClient = window.location.origin;

            const payload = {
                orderId,
                amount: product.price,
                customerName: formData.name,
                customerPhone: formData.phone,
                customerEmail: formData.email,
                returnUrl: `${baseUrlClient}/order-status?order_id={order_id}`
            };

            // 1. Create Order on Backend
            const apiUrl = getApiBaseUrl();
            const response = await axios.post(`${apiUrl}/api/create-order`, payload);

            if (response.data && response.data.payment_session_id) {
                // Save pending order details for post-payment processing
                localStorage.setItem('pendingOrder', JSON.stringify({
                    product,
                    customer: formData,
                    orderId,
                    timestamp: new Date().toISOString()
                }));

                // 2. Initiate Payment
                cashfree.checkout({
                    paymentSessionId: response.data.payment_session_id,
                    redirectTarget: "_self" // Redirects to the return_url specified in backend
                });

                // Note: The redirection will happen here, so subsequent code won't run until return
                // We'll handle post-payment logic in the OrderStatus component (return_url destination)
            } else {
                throw new Error("Failed to generate payment session");
            }

        } catch (err) {
            console.error("Payment Error:", err);
            setError(err.response?.data?.error || err.message || "Payment initiation failed");
            setLoading(false);
        }
    };

    if (!product) return null;

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>

            {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

            <div className="form-row" style={{ gridTemplateColumns: "1.5fr 1fr" }}>

                <form className="checkout-form" onSubmit={handlePayment}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone</label>
                            <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="9999999999" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <textarea required name="address" rows="3" value={formData.address} onChange={handleInputChange} placeholder="Street Address" />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>City</label>
                            <input required type="text" name="city" value={formData.city} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input required type="text" name="state" value={formData.state} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Pincode</label>
                        <input required type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} />
                    </div>

                    <button type="submit" className="checkout-btn" disabled={loading}>
                        {loading ? 'Processing...' : `PAY $${product.price.toFixed(2)}`}
                    </button>
                </form>

                <div className="checkout-summary">
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="cart-item">
                            <span>{product.title} (x1)</span>
                            <span>${product.price.toFixed(2)}</span>
                        </div>
                        <div className="cart-total">
                            <span>Total</span>
                            <span>${product.price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
