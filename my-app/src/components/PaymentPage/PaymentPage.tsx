import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Send payment details to the backend and get order details in response
    fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cardNumber, expiryDate, cvv }),
    })
    .then(response => response.json())
    .then(order => {
      // Redirect to order confirmation page with order details
      navigate('/order-confirmation', { state: { order } });
    });
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Expiry Date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
