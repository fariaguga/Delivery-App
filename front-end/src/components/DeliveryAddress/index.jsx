import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cartContext from '../../context/cartContext';
import api from '../../services/api';
import { getLocalStorage } from '../../utils/localStorage';

function DeliveryAddress() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [sellerId, setSellerId] = useState(0);
  const { total, cartFilter } = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/users')
      .then((response) => {
        const allSellers = response
          .data.filter((user) => user.role === 'seller');

        setSellerId(allSellers[0].id);

        setSellers(allSellers);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { id, token } = getLocalStorage('user');

    const body = {
      userId: id,
      sellerId,
      totalPrice: String(total.toFixed(2)),
      deliveryAddress: address,
      deliveryNumber: number,
      products: cartFilter,
    };

    const headers = {
      Authorization: token,
    };

    api.post('/sales', body, { headers })
      .then((response) => {
        navigate(`/customer/orders/${response.data.id}`);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <h2>Detalhes e Endereço para Entrega</h2>
      <label htmlFor="customer_checkout__select-seller">
        P. Vendedora Responsável:
        <select
          id="customer_checkout__select-seller"
          data-testid="customer_checkout__select-seller"
          value={ sellerId }
          onChange={ ({ target }) => setSellerId(target.value) }
        >
          {sellers.map((item) => (
            <option
              key={ item.id }
              value={ item.id }
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
          type="text"
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
