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
    console.log(token);

    const config = {
      headers: {
        authorization: token,
      },
    };

    api.get('/seller/orders', config)
      .then((res) => {
        const persons = res.data;
        console.log(persons);
        setSellers(persons);
      });
  }, []);

  useEffect(() => {
    console.log(sellers);
  }, [sellers]);

  const handleClick = (sellers) => {
    setSellerId(sellers.id);
    navigate(`/seller/orders/${ sellerId }`)  
  };


  return (
    <div>
      {sellers.map((element) => (
        <div 
        key={ element.id }
        onClick={ () => handleClick(element) }
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
