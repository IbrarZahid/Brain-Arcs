import { ArrowUturnRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import project1 from '../../Assets/Images/project-1.webp';
import project3 from '../../Assets/Images/project2.webp';
import yulys from '../../Assets/Images/yulys.png';
import project2 from '../../Assets/Images/intresting.jpg';
import project4 from '../../Assets/Images/project4.webp'


const Projects = () => {
  return (
    <div>
      <div className='text-center'>
        <div className='text-yellow-500 italic font-bold'>
          Projects
        </div>
        <div className='text-6xl text-slate-700 font-bold'>
          Recents Projects
        </div>
        <div className='font-light my-10'>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <br /> Separated they live in
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8 m-4'>
        <div className='group relative'>
          <img src={yulys} className="w-full rounded h-[295px] object-cover ml-auto" alt="main" />
          <div className='opacity-0 rounded flex justify-center items-center group-hover:opacity-100 absolute top-0 left-0 bg-neutral-900 bg-opacity-80 h-full w-full'>
            <div className='text-white text-3xl font-bold text-center'>
              Website For Jobs Provide <br />
              <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer text-lg mt-3 text-yellow-500'>Yulys.com</div>
            </div>
            <div className='absolute bottom-0 right-0'>
              <div className='p-2 rounded-br bg-yellow-500'>
                <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer'><ArrowUturnRightIcon className='w-5 h-5 text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='group relative'>
            <img src={project1} className="w-full rounded h-[295px] object-cover ml-auto" alt="main" />
            <div className='opacity-0 rounded flex justify-center items-center group-hover:opacity-100 absolute top-0 left-0 bg-neutral-900 bg-opacity-80 h-full w-full'>
              <div className='text-white text-3xl font-bold text-center'>
                Website For Jobs Provide / USA <br />
                <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer text-lg mt-3 text-yellow-500'>Yulys.com</div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <div className='p-2 rounded-br bg-yellow-500'>
                  <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer'><ArrowUturnRightIcon className='w-5 h-5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='group relative'>
            <img src={project2} className="w-full rounded h-[295px] object-cover ml-auto" alt="main" />
            <div className='opacity-0 rounded flex justify-center items-center group-hover:opacity-100 absolute top-0 left-0 bg-neutral-900 bg-opacity-80 h-full w-full'>
              <div className='text-white text-3xl font-bold text-center'>
                Website For Jobs Provide / USA <br />
                <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer text-lg mt-3 text-yellow-500'>Yulys.com</div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <div className='p-2 rounded-br bg-yellow-500'>
                  <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer'><ArrowUturnRightIcon className='w-5 h-5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative'>
          <img src={yulys} className="w-full rounded h-[295px] object-cover ml-auto" alt="main" />
          <div className='opacity-0 rounded flex justify-center items-center group-hover:opacity-100 absolute top-0 left-0 bg-neutral-900 bg-opacity-80 h-full w-full'>
            <div className='text-white text-3xl font-bold text-center'>
              Website For Jobs Provide <br />
              <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer text-lg mt-3 text-yellow-500'>Yulys.com</div>
            </div>
            <div className='absolute bottom-0 right-0'>
              <div className='p-2 rounded-br bg-yellow-500'>
                <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer'><ArrowUturnRightIcon className='w-5 h-5 text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative'>
          <img src={project3} className="w-full rounded h-[295px] object-cover ml-auto" alt="main" />
          <div className='opacity-0 rounded flex justify-center items-center group-hover:opacity-100 absolute top-0 left-0 bg-neutral-900 bg-opacity-80 h-full w-full'>
            <div className='text-white text-3xl font-bold text-center'>
              Website For Jobs Provide <br />
              <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer text-lg mt-3 text-yellow-500'>Yulys.com</div>
            </div>
            <div className='absolute bottom-0 right-0'>
              <div className='p-2 rounded-br bg-yellow-500'>
                <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer'><ArrowUturnRightIcon className='w-5 h-5 text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='group relative'>
            <img src={project4} className="w-full rounded h-[295px] object-cover ml-auto" alt="main" />
            <div className='opacity-0 rounded flex justify-center items-center group-hover:opacity-100 absolute top-0 left-0 bg-neutral-900 bg-opacity-80 h-full w-full'>
              <div className='text-white text-3xl font-bold text-center'>
                Website For Jobs Provide / USA <br />
                <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer text-lg mt-3 text-yellow-500'>Yulys.com</div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <div className='p-2 rounded-br bg-yellow-500'>
                  <div onClick={() => { window.location.href = 'https://yulys.com'; }} className='cursor-pointer'><ArrowUturnRightIcon className='w-5 h-5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;