import logo from './Brainarcs-Logo.svg';

function Navbar() {
  return (
    <div className="navbar flex items-center sticky -top-0 z-50">
      <div className='grid grid-cols-3 items-center w-full'>
        <div className='bg-black w-full px-3 py-2.5'>
          <img src={logo} className="w-16 ml-auto" alt="logo" />
        </div>
        <div className='col-span-2 bg-white py-9'>
        <div className='flex justify-center'>
          <ul className='flex justify-end items-center gap-12 text-gray-500 bg-white'>
            <li className='border-b-4 border-yellow-300'><a href=''> 
              Home
              </a> 
              </li>
            <li className='hover:border-b-4 border-yellow-300'><a href=''> 
              About
              </a> 
              </li>
            <li className='hover:border-b-4 border-yellow-300'><a href=''> 
              Work
              </a> 
              </li>
            <li className='hover:border-b-4 border-yellow-300'><a href=''> 
              Princing
              </a> 
              </li>
            <li className='hover:border-b-4 border-yellow-300'><a href=''> 
              Blogs
              </a> 
              </li>
            <li className='hover:border-b-4 border-yellow-300'><a href=''> 
              Contact
              </a> 
              </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
