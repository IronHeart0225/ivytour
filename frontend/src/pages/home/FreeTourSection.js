import React from 'react';

const FreeTourSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px] mx-2 my-[48px] sm:my-[64px] md:my-[96px] lg:my-[128px]">
      <p className="font-light text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-white text-center">Interested in Booking a Free Tour?</p>
      <button
        type="button"
        className="w-full max-w-[340px] h-[60px] bg-[#fd6262] rounded-[8px] font-normal text-[20px] leading-[30px] text-white"
      >Learn More</button>
    </div>
  );
}

export { FreeTourSection };
