import React from 'react';
import sponserd1 from '../../Assets/Images/partner-1.png';
import sponserd2 from '../../Assets/Images/partner-2.png';
import sponserd3 from '../../Assets/Images/partner-3.png';
import sponserd4 from '../../Assets/Images/partner-4.png';
import sponserd5 from '../../Assets/Images/partner-5.png';



const Sponserd = () => {
  return (
    <div className='container mx-auto my-12 px-12'>
      <div className='grid grid-cols-5 gap-24'>
        <div>
          <img src={sponserd1} className="w-full rounded object-cover cursor-pointer ml-auto" alt="main" />
        </div>
        <div>
          <img src={sponserd2} className="w-full rounded object-cover cursor-pointer ml-auto" alt="main" />
        </div>
        <div>
          <img src={sponserd3} className="w-full rounded object-cover cursor-pointer ml-auto" alt="main" />
        </div>
        <div>
          <img src={sponserd4} className="w-full rounded object-cover cursor-pointer ml-auto" alt="main" />
        </div>
        <div>
          <img src={sponserd5} className="w-full rounded object-cover cursor-pointer ml-auto" alt="main" />
        </div>
      </div>
    </div>
  );
};

export default Sponserd;