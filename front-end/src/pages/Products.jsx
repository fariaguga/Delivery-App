import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import cartContext from '../context/cartContext';
import api from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredCart, setFilteredCart] = useState([]);
  const { total, cart } = useContext(cartContext);

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.error(e));
  }, [filteredCart]);

  useEffect(() => {
    const newCart = cart.filter((item) => item.quantity === 0);
    setFilteredCart(newCart);
  }, [cart]);

  return (
    <>
      <Navbar />
      <main style={ { display: 'flex', flexWrap: 'wrap' } }>
        {products.map((item) => (
          <ProductCard
            key={ item.id }
            product={ item }
          />
        ))}
      </main>
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        {`Ver carrinho: ${total
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
      </button>
    </>
  );
}

export default Products;
