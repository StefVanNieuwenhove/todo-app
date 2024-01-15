import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-16 bg-teal-600'>
        <ul className='w-full h-full flex justify-evenly items-center'>
          <li className='hover:underline hover:cursor-pointer'>
            <Link href={'create'}>Create todo</Link>
          </li>
          <li className='hover:underline hover:cursor-pointer'>
            <Link href={'overview'}>Overview todo&apos;s</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
