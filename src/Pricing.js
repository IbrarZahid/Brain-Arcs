import React from 'react';

const Pricing = () => {
  return (
    <div className='mt-12 container mx-auto'>
      <div className='Heading text-center'>
        <div className='uppercase text-yellow-400 font-bold'> Pricing Plans</div>
        <div className='text-6xl font-bold text-slate-700 mt-3'>Our Best Pricing</div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5 my-24 md:px-12 text-center'>
        <div className='flex justify-center align-center flex-col gap-5 bg-slate-100 shadow-xl p-10 rounded'>
          <div className='uppercase'>Free</div>
          <div className='text-yellow-400 flex gap-2 justify-center font-bold'>$ <div className='text-4xl'>0</div></div>
          <div className='font-extralight'>100% Free. Forever</div>
          <button className='px-8 bg-yellow-400 rounded-full py-4 text-white hover:text-yellow-400 hover:bg-transparent border border-yellow-400'>Get Started</button>
          <div>Enjoy All The Features</div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>150 GB <div className='font-extralight'>Bandwidth</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>100 GB <div className='font-extralight'>Storage</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>$1.00 / GB  <div className='font-extralight'>Overages</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'><div className='font-extralight'>All features</div></div>

        </div>
        <div className='flex justify-center align-center flex-col gap-5 bg-slate-100 shadow-xl p-10 rounded'>
          <div className='uppercase'>Startup</div>
          <div className='text-yellow-400 flex gap-2 justify-center font-bold'>$ <div className='text-4xl'>29</div></div>
          <div className='font-extralight'>All features are included</div>
          <button className='px-8 hover:bg-yellow-400 rounded-full py-4 hover:text-white text-yellow-400 border border-yellow-400'>Get Started</button>
          <div>Enjoy All The Features</div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>450 GB <div className='font-extralight'>Bandwidth</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>400 GB <div className='font-extralight'>Storage</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>$2.00 / GB  <div className='font-extralight'>Overages</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'><div className='font-extralight'>All features</div></div>

        </div>
        <div className='flex justify-center align-center flex-col gap-5 bg-slate-100 shadow-xl p-10 rounded'>
          <div className='uppercase'>PREMIUM</div>
          <div className='text-yellow-400 flex gap-2 justify-center font-bold'>$ <div className='text-4xl'>59</div></div>
          <div className='font-extralight'>All features are included
          </div>
          <button className='px-8 hover:bg-yellow-400 rounded-full py-4 hover:text-white text-yellow-400 border border-yellow-400'>Get Started</button>
          <div>Enjoy All The Features</div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>150 GB <div className='font-extralight'>Bandwidth</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>100 GB <div className='font-extralight'>Storage</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>$1.00 / GB  <div className='font-extralight'>Overages</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'><div className='font-extralight'>All features</div></div>

        </div>
        <div className='flex justify-center align-center flex-col gap-5 bg-slate-100 shadow-xl p-10 rounded'>
          <div className='uppercase'>pro</div>
          <div className='text-yellow-400 flex gap-2 justify-center font-bold'>$ <div className='text-4xl'>99</div></div>
          <div className='font-extralight'>All features are included
          </div>
          <button className='px-8 hover:bg-yellow-400 rounded-full py-4 hover:text-white text-yellow-400 border border-yellow-400'>Get Started</button>
          <div>Enjoy All The Features</div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>150 GB <div className='font-extralight'>Bandwidth</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>100 GB <div className='font-extralight'>Storage</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'>$1.00 / GB  <div className='font-extralight'>Overages</div></div>
          <div className='flex align-items-center gap-2 justify-center items-center text-xl'><div className='font-extralight'>All features</div></div>

        </div>
      </div>
      <div className='text-justify w-4/6 md:px-12 text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vero accusantium sunt sit aliquam ipsum molestias autem perferendis, incidunt cumque necessitatibus cum amet cupiditate, ut accusamus. Animi, quo. Laboriosam, laborum.</div>
    </div>
  );
}

export default Pricing;