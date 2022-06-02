import PropTypes from 'prop-types';
import React from 'react';

function ProductCard({ product }) {
  return (
    <>
      <span
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        { product.name }
      </span>

      <span
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { product.price }
      </span>

      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
        alt={ product.name }
      />

      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        >
          -
        </button>

        <span
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
        >
          0
        </span>

        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
        >
          +
        </button>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
