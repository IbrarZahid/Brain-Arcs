import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/Brainarcs-Logo.svg';
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <div className="navbar flex items-center sticky -top-0 z-50">
      <nav className='grid grid-cols-3 items-center w-full'>
        <div className='bg-black w-full px-3 py-2.5'>
          <img src={logo} className="w-16 ml-auto" alt="logo" />
        </div>
        <div className='col-span-2 bg-white py-9'>
          <div className='flex justify-center'>
            <ul className='flex justify-end items-center gap-12 text-gray-500 bg-white'>
              <li className='border-b-2 border-transparent hover:border-yellow-300'>
                <Link to="/" className={"" + (url === "/" ? "border-b-4 border-yellow-300" : "")}>
                  Home
                </Link>
              </li>
              <li className='border-b-2 border-transparent hover:border-yellow-300'>
                <Link to="/About" className={"" + (url === "/About" ? "border-b-4 border-yellow-300" : "")}>
                About
              </Link>
              </li>
              <li className='border-b-2 border-transparent hover:border-yellow-300'>
                <Link to="/Work" className={"" + (url === "/Work" ? "border-b-4 border-yellow-300" : "")}>
                Work
              </Link>
              </li>
              <li className='border-b-2 border-transparent hover:border-yellow-300'>
                <Link to="/Pricing" className={"" + (url === "/Pricing" ? "border-b-4 border-yellow-300" : "")}>
                Pricing
              </Link>
              </li>
              <li className='border-b-2 border-transparent hover:border-yellow-300'>
                <Link to="/Blogs" className={"" + (url === "/Blogs" ? "border-b-4 border-yellow-300" : "")}>
                Blogs
              </Link>
              </li>
              <li className='border-b-2 border-transparent hover:border-yellow-300'>
                <Link to="/Contact" className={"" + (url === "/Contact" ? "border-b-4 border-yellow-300" : "")}>
                Contact
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
