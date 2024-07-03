import ProductWarrantyComp from '../Component/ProductWarrantyComp';

import { useEffect } from 'react';

const ProductWarranty = () => {
    useEffect(() => {
        window.scrollTo(2, 2); // Sayfanın en üstüne kaydır
      }, []);
  return (
    <div>
       <ProductWarrantyComp></ProductWarrantyComp>
    </div>
  );
}

export default ProductWarranty;

