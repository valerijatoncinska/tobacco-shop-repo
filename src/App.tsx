import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quotes from './features/quotes/Quotes';
import logo from './logo.svg';
import OrderPage from './components/OrderPage/OrderPage';
import AddProductForm from './components/AddProductForm/AddProductForm';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import EditProductPage from './components/EditProductPage/EditProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Quotes />
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span> and </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </header>
        <Routes>
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/products/new" element={<AddProductForm />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;