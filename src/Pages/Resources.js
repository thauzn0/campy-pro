import React, { useEffect } from 'react';
import AboutUs from '../Component/ResourceComp';
import ResourceComp from '../Component/ResourceComp';

const Resources = () => {
    useEffect(() => {
        window.scrollTo(1, 1); // Sayfanın en üstüne kaydır
      }, []);
  return (
    <div>
        <ResourceComp></ResourceComp>
    </div>
  );
}

export default Resources;