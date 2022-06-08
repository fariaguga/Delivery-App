import React from 'react';
import ItemsTable from '../components/ItemsTable';
import Navbar from '../components/Navbar';
import DeliveryAddress from '../components/DeliveryAddress';

function Checkout() {
  return (
    <>
      <Navbar />
      <ItemsTable />
      <DeliveryAddress />
    </>
  );
}

export default Checkout;
