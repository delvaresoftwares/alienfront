import React from 'react';
import './Policies.css';

const Refunds = () => {
    return (
        <div className="policy-container">
            <h1>Refunds & Cancellations</h1>
            <div className="policy-content">
                <h2>Cancellation Policy</h2>
                <p>Orders can be cancelled within 24 hours of placement for a full refund. Once the order is shipped, it cannot be cancelled.</p>

                <h2>Returns</h2>
                <p>We accept returns/exchanges within 7 days of delivery only in cases of manufacturing defects or incorrect size delivery. To be eligible for a return, your item must be unused and in the same condition that you received it.</p>

                <h2>Refunds</h2>
                <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.</p>

                <h2>Contact for Returns</h2>
                <p>To initiate a return, please email us at support@alienhill.shop with your order ID and reason for return.</p>
            </div>
        </div>
    );
};

export default Refunds;
