import { CalendarDaysIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import Blog1 from '../../Assets/Images/Blog1.png';


const Blogsindex = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 my-24 px-24'>
        <div className='col-span-2'>
          <div className='grid grid-cols-2 gap-12'>
            <Link to="/BlogsShowFeed" className='px- shadow-xl'>
              <a href='/'>
                <img src={Blog1} className="w-full h-[275px] object-cover" alt="main" />
                <div className='p-4 font-light'>SEP. 20, 2018 ADMIN </div>
                <div className='p-4 uppercase hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
              </a>
            </Link>
            <Link to="/BlogsShowFeed" className='px- shadow-xl rounded-md'>
              <a href='/'>
                <img src={Blog1} className="w-full h-[275px] object-cover rounded-md" alt="main" />
                <div className='p-4 font-light'>SEP. 20, 2018 ADMIN </div>
                <div className='p-4 uppercase hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
              </a>
            </Link>
            <Link to="/BlogsShowFeed" className='px- shadow-xl rounded-md'>
              <a href='/'>
                <img src={Blog1} className="w-full h-[275px] object-cover rounded-md" alt="main" />
                <div className='p-4 font-light'>SEP. 20, 2018 ADMIN </div>
                <div className='p-4 uppercase hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
              </a>
            </Link>
            <Link to="/BlogsShowFeed" className='px- shadow-xl rounded-md'>
              <a href='/'>
                <img src={Blog1} className="w-full h-[275px] object-cover rounded-md" alt="main" />
                <div className='p-4 font-light'>SEP. 20, 2018 ADMIN </div>
                <div className='p-4 uppercase hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
              </a>
            </Link>
            <Link to="/BlogsShowFeed" className='px- shadow-xl rounded-md'>
              <a href='/'>
                <img src={Blog1} className="w-full h-[275px] object-cover rounded-md" alt="main" />
                <div className='p-4 font-light'>SEP. 20, 2018 ADMIN </div>
                <div className='p-4 uppercase hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
              </a>
            </Link>
            <Link to="/BlogsShowFeed" className='px- shadow-xl rounded-md'>
              <a href='/'>
                <img src={Blog1} className="w-full h-[275px] object-cover rounded-md" alt="main" />
                <div className='p-4 font-light'>SEP. 20, 2018 ADMIN </div>
                <div className='p-4 uppercase hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
              </a>
            </Link>
          </div>
          <div className='flex justify-center'>
            <div className="inline-block my-12">
              <a className='text-black float-left px-4 py-2 rounded-sm hover:bg-slate-400 active:bg-yellow-400' href="/">&laquo;</a>
              <a className='text-black float-left px-4 py-2 rounded-sm bg-yellow-400' href="/">1</a>
              <a className="text-black float-left px-4 py-2 rounded-sm hover:bg-slate-400 active:bg-yellow-400" href="/">2</a>
              <a className='text-black float-left px-4 py-2 rounded-sm hover:bg-slate-400 active:bg-yellow-400' href="/">3</a>
              <a className='text-black float-left px-4 py-2 rounded-sm hover:bg-slate-400 active:bg-yellow-400' href="/">4</a>
              <a className='text-black float-left px-4 py-2 rounded-sm hover:bg-slate-400 active:bg-yellow-400' href="/">5</a>
              <a className='text-black float-left px-4 py-2 rounded-sm hover:bg-slate-400 active:bg-yellow-400' href="/">6</a>
              <a className='text-black float-left px-4 py-2 rounded-sm hover:bg-slate-400 active:bg-yellow-400' href="/">&raquo;</a>
            </div>
          </div>
        </div>
        <div className='mx-16'>
          <div className='search-bar relative mx-7'>
            <input placeholder='Type a keyword and hit enter' className='border rouned p-3' />
            <div className='absolute top-4 right-0'>
              <MagnifyingGlassIcon className='text-slate-400 w-5 h-5' />
            </div>
          </div>
          <div className='category mt-20'>
            <div className='font-bold text-xl text-slate-700'>Categories</div>
            <ul className='font-light'>
              <Link className='flex justify-between border-b py-3'>
                <div>Family Law</div>
                <div className='text-slate-400'>(9)</div>
              </Link>
              <Link className='flex justify-between border-b py-3'>
                <div>Ploitics</div>
                <div className='text-slate-400'>(2)</div>
              </Link>
              <Link className='flex justify-between border-b py-3'>
                <div>Imran khan</div>
                <div className='text-slate-400'>(17)</div>
              </Link>
              <Link className='flex justify-between border-b py-3'>
                <div>Zaman Park</div>
                <div className='text-slate-400'>(8)</div>
              </Link>
              <Link className='flex justify-between border-b py-3'>
                <div>Drugs</div>
                <div className='text-slate-400'>(19)</div>
              </Link>
            </ul>
          </div>
          <div className='mt-20'>
            <div className='font-bold text-xl text-slate-700'>Popular Articles</div>
            <div className='grid grid-cols-3 gap-3 mt-6'>
              <Link href='/' className=''>
                <a href='/'>
                  <img src={Blog1} className="w-full h-[75px] object-cover" alt="main" />
                </a>
              </Link>
              <div className='col-span-2'>
                <div className='uppercase text-sm hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
                <div className='flex gap-4 items-center mt-4'>
                  <div className='text-xs flex gap-1 items-center font-light text-slate-700'> <CalendarDaysIcon className='w-4 h-4' /> Oct 04, 2018 </div>
                  <div className='text-xs flex gap-1 items-center font-light text-slate-700'><UserIcon className='w-4 h-4' /> BrainArcs </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-3 mt-6'>
              <Link href='/' className=''>
                <a href='/'>
                  <img src={Blog1} className="w-full h-[75px] object-cover" alt="main" />
                </a>
              </Link>
              <div className='col-span-2'>
                <div className='uppercase text-sm hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
                <div className='flex gap-4 items-center mt-4'>
                  <div className='text-xs flex gap-1 items-center font-light text-slate-700'> <CalendarDaysIcon className='w-4 h-4' /> Oct 04, 2018 </div>
                  <div className='text-xs flex gap-1 items-center font-light text-slate-700'><UserIcon className='w-4 h-4' /> BrainArcs </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-3 mt-6'>
              <Link href='/' className=''>
                <a href='/'>
                  <img src={Blog1} className="w-full h-[75px] object-cover" alt="main" />
                </a>
              </Link>
              <div className='col-span-2'>
                <div className='uppercase text-sm hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
                <div className='flex gap-4 items-center mt-4'>
                  <div className='text-xs flex gap-1 items-center font-light text-slate-700'> <CalendarDaysIcon className='w-4 h-4' /> Oct 04, 2018 </div>
                  <div className='text-xs flex gap-1 items-center font-light text-slate-700'><UserIcon className='w-4 h-4' /> BrainArcs </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-3 mt-6'>
              <Link href='/' className=''>
                <a href='/'>
                  <img src={Blog1} className="w-full h-[75px] object-cover" alt="main" />
                </a>
              </Link>
              <div className='col-span-2'>
                <div className='uppercase text-sm hover:text-yellow-400'>Even the all-powerful Pointing has no control about the blind texts</div>
                <div className='flex gap-4 items-center mt-4'>
                  <div className='text-xs flex gap-1 items-center font-light text-slate-700'> <CalendarDaysIcon className='w-4 h-4' /> Oct 04, 2018 </div>
                  <div className='text-xs flex gap-1 items-center font-light text-slate-700'><UserIcon className='w-4 h-4' /> BrainArcs </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='font-bold text-xl text-slate-700'>Tag Cloud</div>
            <div className='flex flex-wrap mt-3 gap-2'>
              <div className='text-xs border p-1 rounded text-slate-400 uppercase'>dish</div>
              <div className='text-xs border p-1 rounded text-slate-400 uppercase'>abc</div>
              <div className='text-xs border p-1 rounded text-slate-400 uppercase'>imran khan</div>
              <div className='text-xs border p-1 rounded text-slate-400 uppercase'>PTI</div>
              <div className='text-xs border p-1 rounded text-slate-400 uppercase'>shahbaz sharif</div>
              <div className='text-xs border p-1 rounded text-slate-400 uppercase'>pakistan</div>
              <div className='text-xs border p-1 rounded text-slate-400 uppercase'>zaman park</div>
              <div className='text-xs border p-1 rounded text-slate-400 uppercase'>xyz</div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='font-bold text-xl text-slate-700'>Paragraph</div>
            <div className='text-slate-500 mt-3 font-light'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogsindex;