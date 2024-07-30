import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './OrderConfirmationPage.css';

interface Order {
  id: number;
  date: string;
  total: number;
}

const OrderConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Extract order data from location state
    const state = location.state as { order: Order };
    if (state && state.order) {
      setOrder(state.order);
    } else {
      // If no order data, redirect to home
      navigate('/');
    }
  }, [location, navigate]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="order-confirmation-page">
      <h1>Order Confirmation</h1>
      <p>Thank you for your purchase!</p>
      <p>Order ID: {order.id}</p>
      <p>Date: {order.date}</p>
      <p>Total: ${order.total}</p>
    </div>
  );
}

export default OrderConfirmationPage;
