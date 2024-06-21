import React from 'react';
import ProductSection from '../Component/ProductSection';
import { useEffect } from 'react';

const Products = () => {
  useEffect(() => {
    window.scrollTo(1, 1); // Sayfanın en üstüne kaydır
  }, []);
  return (
    <div>
      <ProductSection />
    </div>
  );
}

export default Products;
