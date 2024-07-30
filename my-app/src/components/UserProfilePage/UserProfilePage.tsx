import React, { useEffect, useState } from 'react';
import './UserProfilePage.css';

interface Order {
  id: number;
  date: string;
  total: number;
}

interface User {
  name: string;
  email: string;
  orders: Order[];
}

const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-profile-page">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h2>Order History</h2>
      <ul className="order-history">
        {user.orders.map(order => (
          <li key={order.id} className="order-item">
            Order #{order.id} - {order.date} - ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfilePage;
