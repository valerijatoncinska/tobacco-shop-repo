import React, { useEffect, useState } from 'react';
import './CartPage.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        setLoading(false);
      });
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice}</h2>
      <button onClick={() => alert('Proceed to checkout')}>Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;
