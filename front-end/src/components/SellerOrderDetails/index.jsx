import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import { getLocalStorage } from '../../utils/localStorage';

const EMTRANSITO = 'Em Trânsito';
function SellerOrderDetails() {
  const location = useLocation();
  const [order, setOrder] = useState({});
  const [disablePreparing, setDisablePreparing] = useState(true);
  const [disableDispatch, setDisableDispatch] = useState(true);

  useEffect(() => {
    const id = location.pathname.split('seller/orders/')[1];
    const { token } = getLocalStorage('user');

    const config = {
      headers: {
        authorization: token,
      },
    };
    api.get(`/seller/order/${id}`, config)
      .then((res) => {
        const sale = res.data;
        setOrder(sale);
      });
  }, [location.pathname]);

  const handleStatus = (id, status) => {
    const { token } = getLocalStorage('user');
    const data = { status };
    const header = {
      headers: {
        authorization: token,
      },
    };

    api.patch(`/seller/order/${id}`, data, header)
      .then((res) => {
        const orderUpdate = res.data;
        setOrder(orderUpdate);
      }).catch((error) => {
        console.log(error);
      });
  };

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

  const disablePreparingBtn = (value) => {
    const prep = value.status === 'Preparando';
    const tras = value.status === EMTRANSITO;
    const entr = value.status === 'Entregue';
    const disabled = (prep || tras || entr);
    setDisablePreparing(disabled);
  };

  const disableDispatchBtn = (valueOrder) => {
    const disabled = (
      valueOrder.status === 'Pendente' || valueOrder.status === EMTRANSITO
      || valueOrder.status === 'Entregue'
    );
    setDisableDispatch(disabled);
  };

  useEffect(() => {
    disableDispatchBtn(order);
    disablePreparingBtn(order);
  }, [order]);

  return (
    <>
      <section>
        <h2
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {Object.keys(order).length > 0 && order.id}
        </h2>
        <h2
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {Object.keys(order).length > 0 && validateDate(order.saleDate)}
        </h2>
        <h2
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {Object.keys(order).length > 0 && order.status}
        </h2>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ () => handleStatus(order.id, 'Preparando') }
          disabled={ disablePreparing }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          disabled={ disableDispatch }
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ () => handleStatus(order.id, EMTRANSITO) }
        >
          SAIU PARA ENTREGA
        </button>
      </section>
      <table>
        <caption>Finalizar Pedido</caption>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(order).length > 0
          && order.sale.map(({ product, quantity }, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>

              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${index}`
                }
              >
                {product.name}
              </td>

              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                {quantity}
              </td>

              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                {(product.price).replace('.', ',')}
              </td>

              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }

              >
                {(product.price * quantity)
                  .toFixed(2).toString().replace('.', ',')}

              </td>

            </tr>
          ))}

        </tbody>
      </table>
      <span
        data-testid="seller_order_details__element-order-total-price"
      >
        {Object.keys(order).length > 0 && (order.totalPrice).replace('.', ',')}
      </span>
    </>
  );
}

export default SellerOrderDetails;
