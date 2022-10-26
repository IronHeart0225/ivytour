import React from 'react';
import Header from '../components/header/Header';

const AppLayout = (props) => {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-b from-[#4e4e4e] to-[#000] w-full h-full z-[-10]" />
      <Header />
      {props.children}
    </div>
  );
}

export default AppLayout;
