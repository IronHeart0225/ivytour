import React from 'react';
import PARTNER_LOGO_1 from '../../assets/images/partner_1.png';
import PARTNER_LOGO_2 from '../../assets/images/partner_2.png';
import PARTNER_LOGO_3 from '../../assets/images/partner_3.png';
import PARTNER_LOGO_4 from '../../assets/images/partner_4.png';

const PARTNERS = [
  { title: 'Our Partners' },
  { logo: PARTNER_LOGO_1 },
  { logo: PARTNER_LOGO_2 },
  { logo: PARTNER_LOGO_3 },
  { logo: PARTNER_LOGO_4 },
];

const PartnerSection = () => {
  return (
    <div className="mx-2 mt-[48px] sm:mt-[64px] md:mt-[96px] lg:mt-[128px]">
      <p className="font-light text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-center text-white">We Are Growing Exponentially</p>
      <p className="font-normal text-[30px] sm:text-[36px] md:text-[48px] lg:text-[64px] text-center text-[#fd6262]">~40,000 students signed up</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 mt-[48px] sm:mt-[64px] md:mt-[96px] lg:mt-[128px] sm:mx-4 lg:mx-16 xl:mx-24 2xl:mx-[108px]">
        {PARTNERS.map((item, idx) => (
          <div key={`partner-${idx}`} className={`flex items-center justify-center h-[96px] md:h-[148px] border-x border-t border-[#d9d9d9] ${item.title ? "sm:col-span-2 lg:col-span-1" : ""}`}>
            {item.title ? (
              <h3 className="font-bold text-[24px] sm:text-[30px] text-white text-center">{item.title}</h3>
            ) : item.logo ? (
              <img src={item.logo} alt="" className="w-[160px] sm:w-[180px" />
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { PartnerSection };
