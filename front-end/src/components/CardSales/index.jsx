import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';
import api from '../../services/api';

function CardSales() {
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const { token } = getLocalStorage('user');

    const config = {
      headers: {
        authorization: token,
      },
    };

    api.get('/seller/orders', config)
      .then((res) => {
        const persons = res.data;
        setSellers(persons);
      });
  }, []);

  const handleClick = (person) => {
    console.log(sellerId);
    setSellerId(person.id);
    navigate(`/seller/orders/${person.id}`);
  };

  return (
    <div>
      {sellers.map((element, index) => (
        <div
          key={ element.id }
          onClick={ () => handleClick(element) }
          onKeyDown={ () => handleClick(element) }
          role="button"
          tabIndex={ index }
        >
          <div
            data-testid={ `seller_orders__element-order-id-${element.id}` }
          >
            <h3>Pedido</h3>
            {element.id}
          </div>
          <div
            data-testid={ `seller_orders__element-delivery-status-${element.id}` }
          >
            {element.status}
          </div>
          <div
            data-testid={ `seller_orders__element-order-date-${element.id}` }
          >
            {element.saleDate}
          </div>
          <div
            data-testid={ `seller_orders__element-card-price-${element.id}` }
          >
            R$
            {element.totalPrice}
          </div>
          <div
            data-testid={ `seller_orders__element-card-address-${element.id}` }
          >
            {element.deliveryAddress}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardSales;
