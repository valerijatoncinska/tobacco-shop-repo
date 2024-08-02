import React from 'react';

interface OrderItemProps {
  id: number;
  product: string;
  quantity: number;
  price: number;
  date: Date;
  status: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ product, quantity, price, date, status }) => {
  return (
    <div className="orderItem">
      <h3>{product}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderItem;