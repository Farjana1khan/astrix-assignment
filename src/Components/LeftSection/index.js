
import React from 'react';
import SlidePage from '../SlidePage';
import Branding from "../../assets/AstrixBranding.png"
import Logo from "../../assets/Logo.png"
function LeftSection() {
  return (
    <>
    <div className='px-10'>
    
      <div>
        <img
          className="inline"
          src={Branding}
          alt="icons"
          width={60}
          height={60}
         
        />
        <img
          className="inline"
          src={Logo}
          alt="icons"
          width={131}
          height={64}
          style={{
            width: '131px',
            height: '64px',
          }}
        />
      </div>
      <div className="carousel__container ">
  <SlidePage />
    </div>
    </div>

    </>
  );
}

export default LeftSection;
