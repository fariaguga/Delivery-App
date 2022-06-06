import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function DeliveryAddress() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [seller, setSeller] = useState('');

  useEffect(() => {
    api.get('/users')
      .then((response) => {
        const allSellers = response
          .data.filter((user) => user.role === 'seller');

        setSeller(allSellers[0].name);

        setSellers(allSellers);
      });
  }, []);

  return (
    <form
      onSubmit={ () => console.log('submitado!') }
    >
      <h2>Detalhes e Endereço para Entrega</h2>
      <label htmlFor="customer_checkout__select-seller">
        P. Vendedora Responsável:
        <select
          id="customer_checkout__select-seller"
          data-testid="customer_checkout__select-seller"
          value={ seller }
          onChange={ ({ target }) => setSeller(target.value) }
        >
          {sellers.map((item) => (
            <option
              key={ item.id }
              value={ item.name }
            >
              { item.name }
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="customer_checkout__input-address">
        Endereço
        <input
          type="text"
          id="customer_checkout__input-address"
          data-testid="customer_checkout__input-address"
          value={ address }
          onChange={ ({ target }) => setAddress(target.value) }
        />
      </label>

      <label htmlFor="customer_checkout__input-addressNumber">
        Número
        <input
          type="number"
          id="customer_checkout__input-addressNumber"
          data-testid="customer_checkout__input-addressNumber"
          value={ number }
          onChange={ ({ target }) => setNumber(target.value) }
        />
      </label>

      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}

export default DeliveryAddress;
