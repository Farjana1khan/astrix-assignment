
import React from 'react';

 import Star from "../../assets/star.png"

 export default function MiddleSection() {
  return (

    <>
    <div  className="relative w-20 h-screen overflow-hidden ml-36"  style={{
     
   
      background: 'repeating-linear-gradient(to right, #B9A0FF 20px, #B9A0FF 20px, #B9A0FF 40px)',
      zIndex:'99999999999999999999',
     
    }}>
   
    <div className='absolute z-40 flex flex-col justify-center w-full h-ful text-nowrap'>
       <div className='middle-section'>
       <p className='-mt-64 text-2xl font-normal leading-8 text-black' style={{ transform: 'rotate(90deg)', whiteSpace: 'nowrap'
    
     
     }}>
       Event: Oasis Bus tour, JLN Stadium, Delhi
     </p>
     <div className='' style={{ 
    
       transform: 'translateY(-50%)' ,
      
     }}>
       <img
         className="inline"
         src={Star}
         alt="icons"
         width={35}
         height={20}
         style={{ 
     
     textAlign:"center",
     justifyItems:"center",
        marginBottom:"-47rem",
       marginLeft:"20px",
       marginTop:"12rem"
     }}
         
       />
     </div>
     <p className='text-2xl font-normal leading-8 text-black' style={{ 
       top: '100%', 
       transform: ' rotate(90deg)', 
       marginTop:"32rem"
      
   
     }}>
       Collection Live: Meta Lives, live on Astrix
     </p>
     
       </div>
      </div>
   <div>

   </div>
    </div>
     </>
  
  );
}



