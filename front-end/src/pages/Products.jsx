import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import api from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <Navbar />
      <main style={ { display: 'flex', flexWrap: 'wrap' } }>
        {products.map((item) => (
          <ProductCard
            key={ item.id }
            product={ item }
          />
        ))}
      </main>
    </>
  );
}

export default Products;
