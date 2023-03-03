import main from './main.webp';

function Main() {
  return (
    <div className="bg-black md:w-[768px] lg:w-full">
      <div className='grid grid-cols-3 pl-20'>
        <div className='text-white lg:my-24 md:my-12 z-40'>
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
        <div className='col-span-2 -ml-80'>
        <div className="before:absolute before:bg-blue-500 after:flex after:bg-blue-300" >
        <img src={main} className="xl:w-[1520px] lg:w-[780px] md:w-[507px] xl:h-[683px] lg:h-[497px] md:h-[300px] object-cover ml-auto" alt="main" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
