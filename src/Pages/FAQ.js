import FaqComp from '../Component/FaqComp';
import React, { useEffect } from 'react';

const FAQ = () => {
  
  useEffect(() => {
    window.scrollTo(1, 1); // Sayfanın en üstüne kaydır
  }, []);

  return (
    <div>
     <FaqComp></FaqComp>
    </div>
  );
};

export default FAQ;
