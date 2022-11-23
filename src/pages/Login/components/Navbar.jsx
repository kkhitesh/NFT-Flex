import React from 'react';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='flex justify-between mx-10 h-42'>
      <img src={logo} className='w-40 py-5'/>
      <button className='bg-red-600 px-5 py-3 my-5 text-white font-semibold'>Connect Wallet</button>
    </nav>
  )
}

export default Navbar