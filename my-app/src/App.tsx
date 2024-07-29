import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderPage from './components/OrderPage/OrderPage';
import AddProductForm from './components/AddProductForm/AddProductForm';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import EditProductPage from './components/EditProductPage/EditProductPage';
import Layout from './components/Navigation/Layout';
import HomePage from './components/HomePage/HomePage';
import ModuleLoginRegister from './components/AuthRootComponent/ModuleLoginRegister';
import OrderHistoryPage from './components/OrderHistoryPage/OrderHistoryPage';

const App: React.FC = () => {
  return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <Routes>
        <Route path="/" element={<Layout />}/>
          <Route index element={<HomePage />} />
          <Route path="/auth/login" element={<ModuleLoginRegister />} />
          <Route path="/auth/register" element={<ModuleLoginRegister />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/products/new" element={<AddProductForm />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} /> {/* Новый маршрут */}
        </Routes>
      </div>
  );
}

export default App;
