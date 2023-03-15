import React from 'react';
import main from '../../Assets/Images/teamWork.mp4';

function WorkMain(event) {
return (
  <div className="bg-black md:w-[768px] h-[600px] lg:w-full">
    <div className=''>
      <div className=''>
          <video autoPlay loop 
          style={{
            position: "absolute",
            width: "100%",
            top: "40%",
            left: "50%",
            height: "630px",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
          }}
          >
          <source src={main} type="video/mp4" controls/>
            Sorry, your browser doesn't support embedded videos.
          </video>
      </div>
    </div>
  </div>
);
}

export default WorkMain;
