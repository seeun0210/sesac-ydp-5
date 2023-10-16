import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
        {
          params: {
            _limit: 10,
          },
        }
      );
      setProducts(res.data);
    }
    getProducts();
    console.log(products);
  }, []);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
