import { Link } from 'react-router-dom';
import main from '../../Assets/Images/BrainArcsContact.png';

const ContactMain = () => {
  return (
    <div>
      <div className="bg-black md:w-[768px] lg:w-full">
        <div className=''>
          <div className=''>
            <div className="relative" >
              <img src={main} className="w-full h-[683px] lg:h-[450px] object-cover ml-auto  bg-black bg-opacity-100 flex justify-center items-center opacity-30 z-10" alt="main" />
              <div className='absolute top-1/4 left-44'>
                <div className='text-7xl font-extrabold text-white'>
                  Contact Us
                </div>
                <div>
                  <ul className='flex gap-4 text-sm mt-8 text-white'>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Contact" className='border-b-2 border-yellow-400'>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;