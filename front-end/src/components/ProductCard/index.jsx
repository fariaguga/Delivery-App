import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import cartContext from '../../context/cartContext';
import styles from './styles.module.scss';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart, setCartFilter, setTotal } = useContext(cartContext);

  const validateQuantity = (qty) => {
    if (qty >= 0) {
      setQuantity(qty);
    }
  };

  const updateCart = useCallback(
    () => {
      const alreadyOnCart = cart.find((item) => item.id === product.id);

      if (alreadyOnCart) {
        const index = cart.indexOf(alreadyOnCart);
        cart[index].quantity = quantity;
        const newCart = cart.filter((item) => item.quantity !== 0);
        if (newCart.length === 0) {
          setTotal(0);
        }
        setCartFilter(newCart);
        setCart(cart);
      } else {
        const item = {
          ...product,
          quantity,
        };
        cart.push(item);
      }
    }, [cart, product, quantity, setCart, setCartFilter, setTotal],
  );

  useEffect(() => {
    updateCart();
  }, [updateCart]);

  return (
    <section className={ styles.container }>
      <div>
        <span
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          R$
          {' '}
          { product.price.toString().replace('.', ',')}
        </span>

        <img
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          src={ product.urlImage }
          alt={ product.name }
          width="250px"
          height="250px"
        />
      </div>
      <section className={ styles.quantity }>
        <span
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </span>

        <div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            onClick={ () => validateQuantity(quantity - 1) }
          >
            -
          </button>

          <input
            type="number"
            value={ quantity }
            onChange={ ({ target }) => validateQuantity(Number(target.value)) }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />

          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ () => validateQuantity(quantity + 1) }
          >
            +
          </button>
        </div>
      </section>
    </section>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
