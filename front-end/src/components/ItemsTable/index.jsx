import React, { useContext, useEffect } from 'react';
import cartContext from '../../context/cartContext';

function ItemsTable() {
  const { cartFilter, setCartFilter, total, setTotal } = useContext(cartContext);

  useEffect(() => {
    let fullPrice = 0;
    cartFilter.forEach((element) => {
      const valorTotal = (Number(element.price) * element.quantity);
      fullPrice += valorTotal;
      setTotal(fullPrice);
    });

    if (cartFilter.length === 0) {
      setTotal(0);
    }
  }, [cartFilter, setTotal]);

  const removeItem = (id) => {
    const newArray = cartFilter.filter((item) => item.id !== id);
    setCartFilter(newArray);
  };

  return (
    <>
      <table>
        <caption>Finalizar Pedido</caption>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cartFilter.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {product.name}
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {product.quantity}
              </td>

              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {(product.price).replace('.', ',')}
              </td>

              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }

              >
                {(product.price * product.quantity)
                  .toFixed(2).toString().replace('.', ',')}

              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                <button
                  type="button"
                  onClick={ () => removeItem(product.id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3
        data-testid="customer_checkout__element-order-total-price"
      >
        {total.toFixed(2).toString().replace('.', ',')}
      </h3>
    </>
  );
}

export default ItemsTable;
