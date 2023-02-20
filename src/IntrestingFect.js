import CountUp from 'react-countup';
import logo from './Brainarcs-Logo.svg';

function IntrestingFect() {
  return (
    <div className="intrestingFect my-24 flex justify-center items-center">
      <div className='flex items-center gap-12'>
        <div className='text-white'>
          Some
          <div className='text-6xl font-bold'>Intresting <br/> Facts</div>
        </div>
        <div className='text-white text-4xl text-center'>
          <CountUp start={0} end={500} duration={5} delay={1} />
          <div className='text-xl font-light'>Done Works</div>
        </div>
        <div className='text-white text-4xl text-center'>
          <CountUp start={0} end={200} duration={5} delay={1} />
          <div className='text-xl font-light'>Happy Customers</div>
        </div>
        <div className='text-white text-4xl text-center'>
          <CountUp start={0} end={20} duration={5} delay={1} />
          <div className='text-xl font-light'>Employers</div>
        </div>
        <div className='text-white text-4xl text-center'>
          <CountUp start={0} end={2500} duration={5} delay={1} />
          <div className='text-xl font-light'>Work Hours</div>
        </div>
      </div>
    </div>
  );
}

export default IntrestingFect;
