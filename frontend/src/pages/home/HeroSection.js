import React from 'react';
import { UNIVERSITIES } from '../../common/common';


const HeroSection = () => {
  return (
    <div className="relative bg-black/75">
      <div className="absolute bg-[url('assets/images/hero_bg.png')] bg-no-repeat bg-center bg-cover w-full h-full z-[-10]" />
      <div className="pt-[92px] px-2 sm:px-4 md:px-[36px] lg:px-[64px] xl:px-[96px] 2xl:px-[108px] pb-[120px] md:pb-[160px] lg:pb-[200px]">
        <h1 className="font-bold text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] text-center md:text-left text-white mt-[32px] md:mt-[64px] lg:mt-[96px]">The free, personalized <br />360° college tours</h1>
        <p className="font-light text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] lg:leading-[48px] text-center md:text-left text-white">Talk to a current undergraduate students in your dream school!</p>
        <div className="flex flex-col items-center md:items-start gap-[8px] mt-[20px]">
          <button
            type="button"
            className="w-full max-w-[340px] h-[60px] bg-[#fd6262] rounded-[8px] font-normal text-[20px] leading-[30px] text-white"
          >Learn More</button>
          <button
            type="button"
            className="w-full max-w-[340px] h-[60px] bg-[#3f4349] rounded-[8px] font-normal text-[20px] leading-[30px] text-white"
          >Already a User</button>
        </div>
        <p className="font-medium text-[20px] sm:text-[24px] md:text-[30px] text-center md:text-left text-white mt-[42px] sm:mt-[56px] md:mt-[72px] lg:mt-[96px]">Free College Tours Available at schools like:</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 mt-2">
          {UNIVERSITIES.map((item, idx) => (
            <h2 key={`university-${idx}`} className="font-medium text-[16px] sm:text-[20px] md:text-[24px] text-[#cccccc] text-center">{item.title}</h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export { HeroSection };
