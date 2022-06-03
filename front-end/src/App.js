import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerOrders from './pages/Seller-Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/admin/manage" element={ <h1>rota /admin/manage</h1> } />
        <Route path="/customer/products" element={ <h1>rota /customer/products</h1> } />
        <Route path="/seller/orders" element={ <SellerOrders/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
