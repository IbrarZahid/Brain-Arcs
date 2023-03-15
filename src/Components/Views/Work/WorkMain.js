import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import main from '../../Assets/Images/teamWork.mp4';

function WorkMain(event) {
  const [src, setSrc] = useState("");
  const handleChange = (event) => {
    try {
      // Get the uploaded file
      const file = event.target.files[0];

      // Transform file into blob URL
      setSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error(error);
    }
  };
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
          {/* <img src={main} className="w-full h-[683px] object-cover ml-auto" alt="main" /> */}
      </div>
    </div>
  </div>
);
}

export default WorkMain;
