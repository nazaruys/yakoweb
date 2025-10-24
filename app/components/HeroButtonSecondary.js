import React from 'react';

function HeroButtonSecondary({href, text}) {
    return (
        <a
            href={href}
            rel="noopener noreferrer"
            className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] border-[6px] border-[#7853B6] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
          >
            <div
              className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
            >
              <span
                className="text-[#7853B6] transition-colors duration-300 ease-in-out text-[15px] font-semibold"
              >
                {text}
              </span>
            </div>
        </a>
    );
}

export default HeroButtonSecondary;