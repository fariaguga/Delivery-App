import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';
import api from '../../services/api';

function GetCustomerCard() {
  const [customers, setCustomers] = useState([]);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const { token } = getLocalStorage('user');

    const config = {
      headers: {
        authorization: token,
      },
    };

    api.get('/customer/orders', config)
      .then((res) => {
        const persons = res.data;
        setCustomers(persons);
      });
  }, []);

  const validateDate = (date) => {
    const MIN = 10;
    const formatDate = new Date(date);
    const day = formatDate.getDate();
    const month = formatDate.getMonth() + 1;
    const year = formatDate.getFullYear();
    const d = `${day < MIN ? `0${day}` : day}`;
    const m = `${month < MIN ? `0${month}` : month}`;
    return `${d}/${m}/${year}`;
  };

  const handleClick = (person) => {
    console.log(userId);
    setUserId(person.id);
    navigate(`/customer/orders/${person.id}`);
  };

  return (
    <div>
      {customers.map((element, index) => (
        <div
          key={ element.id }
          onClick={ () => handleClick(element) }
          onKeyDown={ () => handleClick(element) }
          role="button"
          tabIndex={ index }
        >
          <div
            data-testid={ `customer_orders__element-order-id-${element.id}` }
          >
            <h3>Pedido</h3>
            {element.id}
          </div>
          <div
            data-testid={ `customer_orders__element-delivery-status-${element.id}` }
          >
            {element.status}
          </div>
          <div
            data-testid={ `customer_orders__element-order-date-${element.id}` }
          >
            {validateDate(element.saleDate)}
          </div>
          <div
            data-testid={ `customer_orders__element-card-price-${element.id}` }
          >
            {(element.totalPrice).replace('.', ',')}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetCustomerCard;
