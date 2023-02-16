import main from './Main.jpg';

function Main() {
  return (
    <div className="bg-black">
      <div className='grid grid-cols-3 pl-20'>
        <div className='text-white my-24 z-40'>
          <h1 className='border-b-4 border-yellow-400 w-[70px]'>Welcome</h1>
          <div className='text-[86px] font-bold mt-2 leading-tight'>
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
        <img src={main} className="w-[1450px] h-[660px] object-cover ml-auto" alt="main" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
