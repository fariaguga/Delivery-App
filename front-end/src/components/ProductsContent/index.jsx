import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';
import cartContext from '../../context/cartContext';
import api from '../../services/api';
import styles from './styles.module.scss';

function ProductsContent() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { total, cartFilter, setTotal } = useContext(cartContext);
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (total === 0) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [total]);

  useEffect(() => {
    let fullPrice = 0;
    cartFilter.forEach((element) => {
      const valorTotal = (Number(element.price) * element.quantity);
      fullPrice += valorTotal;
      setTotal(fullPrice);
    });
  }, [cartFilter, setTotal]);
  return (
    <main className={ styles.container }>
      {products.map((item) => (
        <ProductCard
          key={ item.id }
          product={ item }
        />
      ))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        className={ styles.btnCart }
        disabled={ disableBtn }
        onClick={ () => navigate('/customer/checkout') }
      >
        Ver Carrinho: R$
        {' '}
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {total.toFixed(2).toString().replace('.', ',')}
        </span>
      </button>
    </main>

  );
}

export default ProductsContent;
