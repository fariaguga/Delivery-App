import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import './styles/global.scss';
import Register from './pages/Register';
import Products from './pages/Products';
import SellerOrders from './pages/Seller-Orders';
import OrderDetails from './pages/OrderDetails';
import CartProvider from './context/cartProvider';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/admin/manage" element={ <Admin /> } />
        <Route
          path="/customer/products"
          element={
            <CartProvider>
              <Products />
            </CartProvider>
          }
        />
        <Route path="/seller/orders" element={ <SellerOrders /> } />
        <Route path="/seller/orders/:id" element={ <OrderDetails /> } />
        <Route
          path="/customer/checkout"
          element={
            <CartProvider>
              <Checkout />
            </CartProvider>
          }
        />
        <Route
          path="/customer/orders/:id"
          element={ <h1>rota /customer/orders/id</h1> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
