import main from '../../Assets/Images/main.webp';
import ReactPlayer from 'react-player';
import React, { useState, useRef } from 'react';
import video from '../../Assets/Images/Web Development Promo _ Animation Video 2020 _.mp4';
import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

function Main() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="bg-black md:w-[768px] lg:w-full">
      <div className='grid grid-cols-5 pl-20'>
        <div className='text-white lg:my-24 md:my-12 z-50'>
          <h1 className='border-b-4 border-yellow-400 w-[70px]'>Welcome</h1>
          <div className='xl:text-[72px] lg:text-[44px] md:text-[22px] xl:w-[450px] lg:w-[300px] md:w-[320px] font-extrabold mt-2 leading-tight'>
            We Help to Build You the Product
          </div>
          <h1 className='text-2xl'>
            Business Solution
          </h1>
          <button className='bg-yellow-400 w-40 h-14 mt-4'>
            Get In Tuch
          </button>
        </div>
        <div className='col-span-4 -ml-80 relative'>
          <div className='group absolute top-0 left-0 right-0 bottom-0 w-full rounded-xl '>
          <div className="h-full bg-black bg-opacity-100 flex justify-center items-center opacity-30 z-10" >
            <video loop ref={videoRef}
              style={{
                position: "absolute",
                width: "100%",
                top: "50%",
                left: "65%",
                height: "603px",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                backgroundImage: 'url{https://media.istockphoto.com/id/1186651737/photo/beauty-pastel-sky-soft-color-cloud-sweet-background.jpg?b=1&s=170667a&w=0&k=20&c=x603mALFT4ybBQUJeD7_u-xYbCOHRQhbJVuksFK1sVQ=}'
              }}
            >
              <source src={video} type="video/mp4" controls className='w-full' />
            </video>
          </div>
            <div className='absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100'>
              <div onClick={togglePlay}>
                {isPlaying ? <PauseCircleIcon className='w-12 text-white h-12' /> : <PlayCircleIcon className='w-12 h-12 text-white' />}
              </div>
            </div>
          </div>
          {/* <img src={main} className="xl:w-[1520px] lg:w-[780px] md:w-[507px] xl:h-[683px] lg:h-[497px] md:h-[300px] object-cover ml-auto" alt="main" /> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
