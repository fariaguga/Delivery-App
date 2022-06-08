import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utils/localStorage';
import api from '../../services/api';

function CardSales() {
  // const [loginError, setLoginError] = useState(false);
  const [name, setName] = useState();

  useEffect(() => {
    const { token } = getLocalStorage('user');
    console.log(token);

    // api.post('/seller', {}, { headers })
    // .then(({ }) => {
    //   setLoginError(false);
    // })
    // .catch(() => setLoginError(true));

    api.get('/seller')
      .then((res) => {
        const persons = res.data;
        console.log(persons);
        setName({ persons });
      });
    console.log(name);
  }, [name]);

  return (
    <div>
      <div>Pedido</div>
      <div>Status</div>
      <div>Data</div>
      <div>Preço</div>
      <div>Endereço</div>
    </div>
  );
}

export default CardSales;
