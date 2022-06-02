import React from 'react';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <nav className={ styles.container }>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </button>

      <h2
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Nome
      </h2>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </nav>
  );
}

export default Navbar;
