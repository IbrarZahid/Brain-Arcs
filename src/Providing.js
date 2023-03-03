import { BoltIcon, BriefcaseIcon, ComputerDesktopIcon, LightBulbIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
function Providing() {
  return (
    <div className=' md:w-[768px] lg:w-full mx-auto'>
      <div className='grid grid-cols-2 gap-14'>
        <div className='text-right xl:mt-24 lg:mt-10 mt-6  text-slate-700'>
          <div className='uppercase text-yellow-400'>Providing</div>
          <div className='font-bold text-4xl'>
            What We Can Do for You
          </div>
          <div className='grid grid-cols-8 lg:mt-8 md:mt-4 gap-4 group'>
            <div className='col-span-7'>
              <div className='heading uppercase'>
                MARKET RESEARCH
              </div>
              <div className='details xl:w-1/2 lg:w-full ml-auto Lg:leading-7 font-light'>
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </div>
            </div>
            <div className='text-right'>
              <div className='bg-neutral-900 rounded-full lg:h-20 md:h-16 lg:w-20 md:w-16 flex justify-center items-center group-hover:bg-yellow-500'>
                <LightBulbIcon className='h-5 w-5 text-white' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-8 mt-8 gap-4 group'>
            <div className='col-span-7'>
              <div className='heading uppercase'>
                FINANCIAL SERVICES
              </div>
              <div className='details xl:w-1/2 lg:w-full ml-auto leading-7 font-light'>
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </div>
            </div>
            <div className='text-right'>
              <div className='bg-neutral-900 rounded-full lg:h-20 md:h-16 lg:w-20 md:w-16 flex justify-center items-center group-hover:bg-yellow-500'>
                <LightBulbIcon className='h-5 w-5 text-white' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-8 mt-8 gap-4  group'>
            <div className='col-span-7'>
              <div className='heading uppercase'>
                ONLINE MARKETING

              </div>
              <div className='details xl:w-1/2 lg:w-full ml-auto leading-7 font-light'>
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </div>
            </div>
            <div className='text-right'>
              <div className='bg-neutral-900 rounded-full lg:h-20 md:h-16 lg:w-20 md:w-16 flex justify-center items-center group-hover:bg-yellow-500'>
                <LightBulbIcon className='h-5 w-5 text-white' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-8 mt-8 gap-4 group'>
            <div className='col-span-7'>
              <div className='heading uppercase'>
                24/7 SUPPORT
              </div>
              <div className='details xl:w-1/2 lg:w-full ml-auto leading-7 font-light'>
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </div>
            </div>
            <div className='text-right'>
              <div className='bg-neutral-900 rounded-full lg:h-20 md:h-16 lg:w-20 md:w-16 flex justify-center items-center group-hover:bg-yellow-500'>
                <LightBulbIcon className='h-5 w-5 text-white' />
              </div>
            </div>
          </div>
        </div>
        <div className='text-left'>
          <div className='prividing-banner w-full'>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-20'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <BriefcaseIcon className='w-20 h-20' />
          <div className='text-center'>
            <div className='font-bold'>
              BUSINESS STRATEGY
            </div>
            <div className='font-light leading-8 mt-4'>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <MagnifyingGlassIcon className='w-20 h-20' />
          <div className='text-center'>
            <div className='font-bold'>
              DATA ANALYSIS
            </div>
            <div className='font-light leading-8 mt-4'>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <ComputerDesktopIcon className='w-20 h-20' />
          <div className='text-center'>
            <div className='font-bold'>
            GRAPHIC DESIGN
            </div>
            <div className='font-light leading-8 mt-4'>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <BoltIcon className='w-20 h-20' />
          <div className='text-center'>
            <div className='font-bold'>
              BUSINESS STRATEGY
            </div>
            <div className='font-light leading-8 mt-4'>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Providing;
