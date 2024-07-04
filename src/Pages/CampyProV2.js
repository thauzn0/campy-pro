import React, { useEffect } from 'react';
import V2Comp from '../Component/v2Comp';

const CampyProV2 = () => {
  useEffect(() => {
    window.scrollTo(1, 1); // Sayfanın en üstüne kaydır
  }, []);

  return (
    <div>
      <V2Comp />
    </div>
  );
}

export default CampyProV2;
