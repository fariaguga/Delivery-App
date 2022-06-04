import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import cartContext from '../context/cartContext';
import api from '../services/api';

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { total, cartFilter, setTotal } = useContext(cartContext);

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    let fullPrice = 0;
    cartFilter.forEach((element) => {
      const valorTotal = (Number(element.price) * element.quantity);
      fullPrice += valorTotal;
      setTotal(fullPrice);
    });
  }, [cartFilter, setTotal]);
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
        onClick={ () => navigate('/customer/checkout') }
      >
        {total.toFixed(2).toString().replace('.', ',')}
        {/* {`Ver carrinho: ${total
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`} */}
      </button>
      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Carrinho
      </button>
    </>
  );
}

export default Products;
