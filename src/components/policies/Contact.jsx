import React from 'react';
import './Policies.css';

const Contact = () => {
    return (
        <div className="policy-container">
            <h1>Contact Us</h1>
            <div className="policy-content">
                <p>We'd love to hear from you. Reach out to us for any queries, support, or collaborations.</p>

                <div className="contact-details">
                    <h3>Customer Support</h3>
                    <p>Email: support@alienhill.shop</p>
                    <p>Phone: +91 99999 99999</p>
                    <p>Hours: Mon-Fri, 10:00 AM - 6:00 PM IST</p>
                </div>

                <div className="contact-details">
                    <h3>Registered Office</h3>
                    <p>Alienhill Ventures</p>
                    <p>123, Space Station Road</p>
                    <p>Sector 42, Bangalore, Karnataka</p>
                    <p>India - 560001</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
