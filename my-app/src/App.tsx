import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderPage from './components/OrderPage/OrderPage';
import AddProductForm from './components/AddProductForm/AddProductForm';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import EditProductPage from './components/EditProductPage/EditProductPage';

const App: React.FC = () => {
  return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <Routes>
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/products/new" element={<AddProductForm />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
        </Routes>
      </div>
  );
}

export default App;