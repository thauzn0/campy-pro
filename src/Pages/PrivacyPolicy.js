import PrivacyComp from '../Component/PrivacyComp';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(2, 2); // Sayfanın en üstüne kaydır
      }, []);
  return (
    <div>
       <PrivacyComp></PrivacyComp>
    </div>
  );
}

export default PrivacyPolicy;

