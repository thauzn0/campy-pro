import React, { useEffect } from 'react';
import V1Comp from '../Component/v1Comp';

const CampyProV1 = () => {
  useEffect(() => {
    window.scrollTo(1, 1); // Sayfanın en üstüne kaydır
  }, []);

  return (
    <div>
      <V1Comp />
    </div>
  );
}

export default CampyProV1;
