import React from 'react';
import { Link } from 'react-router-dom';
import Location from '../../Assets/Images/Location.webp';


const ContactIndex = () => {
  return (
    <div className='container my-12 mx-auto'>
      <div className='font-bold text-slate-700 text-4xl'>
        Contact Information
      </div>
      <div className='grid grid-cols-4 gap-12 items-center mt-12 mx-14'>
        <div className='bg-yellow-400 p-8 h-[100px] rounded hover:shadow-xl border border-transparent hover:border-yellow-400 hover:bg-transparent'>
          <div className='flex items-center gap-2'>
            <div className='font-bold'>
              Adress:
            </div>
            <div className='font-light text-sm text-slate-700'>
              <Link>
                198 West 21th Street, Suite 721 New York NY 10016
              </Link>
            </div>

          </div>
        </div>
        <div className='bg-yellow-400 p-8 h-[100px] rounded hover:shadow-xl border border-transparent hover:border-yellow-400 hover:bg-transparent'>
          <div className='flex items-center gap-2'>
            <div className='font-bold'>
              Phone:
            </div>
            <div className='font-light text-sm text-slate-700'>
              <Link>
                + 1235 2355 98
              </Link>
            </div>

          </div>
        </div>
        <div className='bg-yellow-400 p-8 h-[100px] rounded hover:shadow-xl border border-transparent hover:border-yellow-400 hover:bg-transparent'>
          <div className='flex items-center gap-2'>
            <div className='font-bold'>
              Email:
            </div>
            <div className='font-light text-sm text-slate-700'>
              <Link>
                Ranashamshair123@gmail.com
              </Link>
            </div>

          </div>
        </div>
        <div className='bg-yellow-400 p-8 h-[100px] rounded hover:shadow-xl border border-transparent hover:border-yellow-400 hover:bg-transparent'>
          <div className='flex items-center gap-2'>
            <div className='font-bold'>
              Website:
            </div>
            <div className='font-light text-sm text-slate-700'>
              <Link>
                BrainArcs.co
              </Link>
            </div>

          </div>
        </div>

      </div>
      <div className='mt-12 grid grid-cols-2 gap-24 mx-14'>
        <div>
          <input className='border w-full p-3 rounded my-2' placeholder='Your Name...' />
          <input className='border w-full p-3 rounded my-2' placeholder='Your Email...' />
          <input className='border w-full p-3 rounded my-2' placeholder='Subject...' />
          <textarea className='border w-full p-3 rounded my-2' rows={"5"} placeholder='Your Message...' />
          <button className='border px-6 py-3 border-transparent bg-yellow-400 rounded-full text-white hover:border-yellow-400 hover:text-yellow-400 hover:bg-transparent'> Send Message</button>
        </div>
        <div className='cursor-pointer'>
          <img src={Location} className="w-full h-[453px] object-cover" alt="main" />
        </div>
      </div>
    </div>
  );
};

export default ContactIndex;