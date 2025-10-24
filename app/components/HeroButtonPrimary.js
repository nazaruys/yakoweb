import React from 'react';

function HeroButtonPrimary({href, text, target="_self"}) {
    return (
        <a
            href={href}
            target={target}
            className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[6px] transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5"
          >
            <div
              className="select-none relative flex items-center justify-center w-full h-full rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]"
            >
              {/* Sharp front text */}
              <span
                className="text-white text-[15px] font-semibold"
              >
                {text}
              </span>
              <span
                className="absolute text-white text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
                aria-hidden="true"
              >
                {text}
              </span>

            </div>
        </a>
    );
}

export default HeroButtonPrimary;