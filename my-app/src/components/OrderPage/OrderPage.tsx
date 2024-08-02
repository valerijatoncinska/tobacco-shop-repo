import React from 'react';
import OrderItem from './OrderItem'; 

const OrderPage: React.FC = () => {
  const orders = [
    { id: 1, product: 'Product 1', quantity: 2, price: 30, date: new Date(), status: 'Delivered' },
    { id: 2, product: 'Product 2', quantity: 1, price: 20, date: new Date(), status: 'Pending' },
  ];

  return (
    <div>
      <h1>Order Page</h1>
      <div>
        {orders.map(order => (
          <OrderItem
            key={order.id}
            id={order.id}
            product={order.product}
            quantity={order.quantity}
            price={order.price}
            date={order.date}
            status={order.status}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;