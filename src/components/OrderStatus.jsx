import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getApiBaseUrl } from '../config';
import './CategorySection.css'; // Reuse basic styles

const OrderStatus = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const orderId = searchParams.get('order_id');
    const [status, setStatus] = useState('VERIFYING'); // VERIFYING, SUCCESS, FAILED
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const verifyOrder = async () => {
            if (!orderId) {
                setStatus('FAILED');
                return;
            }

            try {
                // 1. Verify Payment with Backend
                const baseUrl = getApiBaseUrl();
                const response = await axios.post(`${baseUrl}/api/verify-payment`, { orderId });
                const paymentData = response.data;

                if (paymentData.order_status === 'PAID') {
                    // 2. Retrieve Pending Order Data
                    const pendingOrderStr = localStorage.getItem('pendingOrder');
                    if (pendingOrderStr) {
                        const pendingOrder = JSON.parse(pendingOrderStr);

                        // Ensure this is the correct order (simple check)
                        if (pendingOrder.orderId === orderId) {
                            // 3. Save to Firestore
                            await saveOrderToFirestore(pendingOrder, paymentData);
                            localStorage.removeItem('pendingOrder'); // Clear storage
                            setOrderDetails(pendingOrder);
                            setStatus('SUCCESS');
                        } else {
                            // Order ID mismatch, maybe stale data
                            console.warn("Order ID mismatch with local storage");
                            setStatus('SUCCESS'); // Still paid, just data might be missing specific local details
                        }
                    } else {
                        setStatus('SUCCESS'); // Paid, but local details lost
                    }
                } else {
                    setStatus('FAILED');
                }
            } catch (error) {
                console.error("Verification failed", error);
                setStatus('FAILED');
            }
        };

        verifyOrder();
    }, [orderId]);

    const saveOrderToFirestore = async (orderData, paymentData) => {
        try {
            await addDoc(collection(db, "orders"), {
                orderId: orderData.orderId,
                customer: orderData.customer,
                items: [orderData.product], // Assuming single item for now
                amount: orderData.product.price,
                paymentStatus: 'PAID',
                paymentDetails: {
                    cf_payment_id: paymentData.cf_payment_id || null, // Capture specific payment ID if available
                    payment_method: paymentData.payment_method || 'online'
                },
                createdAt: new Date()
            });
            console.log("Order saved to Firestore");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    if (status === 'VERIFYING') {
        return (
            <div className="category-section" style={{ textAlign: 'center', paddingTop: '150px' }}>
                <h1 style={{ color: 'white' }}>Verifying Payment...</h1>
                <p style={{ color: '#888' }}>Please wait while we confirm your order.</p>
            </div>
        );
    }

    if (status === 'SUCCESS') {
        return (
            <div className="category-section" style={{ textAlign: 'center', paddingTop: '150px' }}>
                <h1 style={{ color: '#4CAF50', fontSize: '3rem' }}>ORDER SUCCESSFUL</h1>
                <p style={{ color: 'white', fontSize: '1.2rem', margin: '1rem 0' }}>
                    Thank you, {orderDetails?.customer?.name || 'Customer'}. Your order has been placed.
                </p>
                {orderDetails && (
                    <div style={{ color: '#aaa', margin: '2rem auto', maxWidth: '400px', textAlign: 'left', border: '1px solid #333', padding: '1rem', borderRadius: '8px' }}>
                        <p><strong>Order ID:</strong> {orderId}</p>
                        <p><strong>Item:</strong> {orderDetails.product.title}</p>
                        <p><strong>Amount:</strong> ₹{orderDetails.product.price.toFixed(2)}</p>
                    </div>
                )}
                <Link to="/" className="checkout-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>CONTINUE SHOPPING</Link>
            </div>
        );
    }

    return (
        <div className="category-section" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <h1 style={{ color: '#FF5252', fontSize: '3rem' }}>ORDER FAILED</h1>
            <p style={{ color: 'white', margin: '1rem 0' }}>The payment could not be completed or was cancelled.</p>
            <button onClick={() => navigate('/checkout')} className="checkout-btn">TRY AGAIN</button>
        </div>
    );
};

export default OrderStatus;
