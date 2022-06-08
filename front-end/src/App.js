import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import './styles/global.scss';
import Register from './pages/Register';
import Products from './pages/Products';
import SellerOrders from './pages/Seller-Orders'
import CartProvider from './context/cartProvider';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/admin/manage" element={ <h1>rota /admin/manage</h1> } />
        <Route
          path="/customer/products"
          element={
            <CartProvider>
              <Products />
            </CartProvider>
          }
        />
        <Route path="/customer/checkout" element={ <h1>rota /customer/checkout</h1> } />
        <Route path="/seller/orders" element={ <SellerOrders /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
