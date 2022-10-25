import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[92px] bg-black/[.5] opacity-75 flex items-center justify-between px-12">
      <span className="font-bold text-[32px] leading-[48px] text-white">tourable</span>
      <button
        className="border border-white rounded-[8px] font-light text-[20px] leading-[30px] text-white px-8 py-1"
      >log in</button>
    </div>
  );
}

export default Header;
