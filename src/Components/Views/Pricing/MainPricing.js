import { Link } from 'react-router-dom';
import main from '../../Assets/Images/Main.jpg';

const MainPricing = () => {
  return (
    <div>
      <div className="bg-black md:w-[768px] lg:w-full">
        <div className=''>
          <div className=''>
            <div className="relative" >
              <img src={main} className="w-full h-[683px] object-cover ml-auto" alt="main" />
              <div className='absolute top-1/4 left-44'>
                <div className='text-7xl font-extrabold text-white'>
                  Pricing
                </div>
                <div>
                  <ul className='flex gap-4 text-sm mt-8 text-white'>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Pricing" className='border-b-2 border-yellow-400'>Pricing</Link>
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

export default MainPricing;