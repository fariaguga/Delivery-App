import PropTypes from 'prop-types';
import React from 'react';

function ProductCard({ product }) {
  return (
    <section>
      <span
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        { product.name }
      </span>

      <span
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { product.price.toString().replace('.', ',')}
      </span>

      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
        alt={ product.name }
        width="100px"
        height="100px"
      />

      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        >
          -
        </button>

        <input
          type="text"
          value="0"
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
        />

        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
        >
          +
        </button>
      </div>
    </section>
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
