import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, removeItem } from '../../utils/localStorage';
import styles from './styles.module.scss';

function NavBarSeller() {
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
      <section>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          className={ styles.btnProducts }
        >
          Pedidos
        </button>
      </section>
      <section className={ styles.containerUser }>
        <button
          type="button"
          className={ styles.btnUser }
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }
        </button>

        <button
          type="button"
          className={ styles.btnExit }
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout() }
        >
          Sair
        </button>
      </section>
    </nav>
  );
}

export default NavBarSeller;
