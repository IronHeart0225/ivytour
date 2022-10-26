import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="absolute z-[100] w-full h-[92px] bg-black/[.5] opacity-75 flex items-center justify-between pl-12 pr-6 sm:pr-8">
      <Link to="/" className="font-bold text-[32px] leading-[48px] text-white">tourable</Link>
      <button
        className="border border-white rounded-[8px] font-light text-[20px] leading-[30px] text-white px-4 sm:px-8 py-1"
      >log in</button>
    </div>
  );
}

export default Header;
