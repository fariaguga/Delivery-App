import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, removeItem } from '../../utils/localStorage';
import styles from './styles.module.scss';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(getLocalStorage('user'));
  }, []);

  const logout = () => {
    removeItem('user');
    navigate('/login');
  };
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
        { user.name }
      </h2>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        Sair
      </button>
    </nav>
  );
}

export default Navbar;
