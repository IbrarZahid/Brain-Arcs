import React from 'react';
import { Link } from 'react-router-dom';
import Blog1 from '../../Assets/Images/Blog1.png';


const Blogsindex = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 mt-12'>
        <div className='col-span-2'>
          <div className='grid grid-cols-2'>
            <Link href='{}'>
              <a>
              <img src={Blog1} className="w-full h-[275px] object-cover" alt="main" />
              <div className='py-8 font-light'>SEP. 20, 2018 ADMIN </div>
              <div className='uppercase'>Even the all-powerful Pointing has no control about the blind texts</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogsindex;