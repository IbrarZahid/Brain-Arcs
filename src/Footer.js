import { EnvelopeOpenIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';
import logo from './Brainarcs-Logo.svg';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <>
      <div className='bg-slate-800'>
        <div className='container mx-auto md:px-12 py-10'>
          <div className='grid grid-cols-4 gap-10'>
            <div>
              <div className='logo'>
                <img src={logo} className="w-16" alt="logo" />
                <p className='mt-5 text-slate-100 text-base font-extralight'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='Social-icons'>
                  <div className='flex gap-2 mt-4'>
                    <a href='/'>
                      <SocialIcon network="twitter" bgColor="rgba(255, 255, 255, 0.05)" fgColor='white' /></a>
                    <a href='/'>
                      <SocialIcon network="facebook" bgColor="rgba(255, 255, 255, 0.05)" fgColor='white' />
                    </a>
                    <a href='/'>
                      <SocialIcon network="instagram" bgColor="rgba(255, 255, 255, 0.05)" fgColor='white' />
                    </a>
                    <a href='/'>
                      <SocialIcon network="linkedin" bgColor="rgba(255, 255, 255, 0.05)" fgColor='white' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='mb-6 text-white text-lg'>Usefull Links</div>
              <ul className='flex flex-col gap-2 text-slate-100 text-base font-extralight'>
                <li className='cursor-pointer'>
                  Home
                </li>
                <li className='cursor-pointer'>
                  About
                </li>
                <li className='cursor-pointer'>
                  Work
                </li>
                <li className='cursor-pointer'>
                  Pricing
                </li>
                <li className='cursor-pointer'>
                  Blog
                </li>
              </ul>
            </div>
            <div>
              <div className='mb-6 text-white text-lg'>Quick Links</div>
              <ul className='flex flex-col gap-2 text-slate-100 text-base font-extralight'>
                <li className='cursor-pointer'>
                  About Us
                </li>
                <li className='cursor-pointer'>
                  Practice Areas
                </li>
                <li className='cursor-pointer'>
                  Appointment
                </li>
                <li className='cursor-pointer'>
                  Terms & Conditions
                </li>
                <li className='cursor-pointer'>
                  FAQ
                </li>
              </ul>
            </div>
            <div>
              <div className='mb-6 text-white text-lg'>Have a Questions?</div>
              <ul className='flex flex-col gap-6 text-slate-100 text-base font-extralight'>
                <li className='cursor-pointer flex gap-6'>
                  <MapPinIcon className='w-[30px] h-[20px] text-white' />
                  H-Block Valencia Town Lahore Punjab Pakistan
                </li>
                <li className='cursor-pointer flex gap-6'>
                  <PhoneIcon className='w-[20px] h-[20px] text-white' />
                  <div>+92 322 4248779</div>
                </li>

                <li className='cursor-pointer flex gap-6'>
                  <EnvelopeOpenIcon className='w-[20px] h-[20px] text-white' />
                  <div>Brainarcs@gmail.com</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;