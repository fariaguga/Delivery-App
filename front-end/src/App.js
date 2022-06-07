import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import './styles/global.scss';
import Register from './pages/Register';
import Products from './pages/Products';
import CartProvider from './context/cartProvider';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route
          path="/admin/manage"
          element=
          {
            <Admin />
          }
          />
        <Route
          path="/customer/products"
          element={
            <CartProvider>
              <Products />
            </CartProvider>
          }
        />
        <Route path="/customer/checkout" element={ <h1>rota /customer/checkout</h1> } />
        <Route path="/seller/orders" element={ <h1>rota /seller/orders</h1> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
