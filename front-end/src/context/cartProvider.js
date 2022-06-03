import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cartContext from './cartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const states = {
    cart,
    setCart,
    total,
    setTotal,
  };

  return (
    <cartContext.Provider value={ states }>
      {children}
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
