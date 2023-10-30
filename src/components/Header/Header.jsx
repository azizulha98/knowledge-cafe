import React from 'react';
import navImg from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center max-w-screen-xl mx-auto my-5 border-b-2'>
      <h2 className='text-3xl font-bold uppercase'>Knowledge Cafe</h2>
      <img src={navImg} alt="" />
    </div>
  );
};

export default Header;