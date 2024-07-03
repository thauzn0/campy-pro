import React, { useEffect } from 'react';
import TermComp from '../Component/TermComp';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(1, 1); // Sayfanın en üstüne kaydır
      }, []);
  return (
    <div>
        <TermComp></TermComp>
    </div>
  );
}

export default TermsAndConditions;