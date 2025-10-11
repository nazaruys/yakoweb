import React from 'react';

const ContactCard = ({ 
  href, 
  title, 
  description, 
  ctaText, 
  icon: Icon, 
  iconColor, 
  bgColor, 
  hoverBgColor, 
  textColor, 
  hoverTextColor,
  target = "_blank",
  rel = "noopener noreferrer",
  isEmail = false
}) => {

  return (
    <a 
      href={href} 
      target={isEmail ? undefined : target}
      rel={isEmail ? undefined : rel}
      className="bg-SecondaryBackground border border-dark/20 rounded-xl p-6 hover:shadow-[0_0_10px_rgba(0,0,0,0.10)] transition-all duration-300 group block"
    >
      <div className="flex flex-col items-center text-center">
        <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mb-4 group-hover:${hoverBgColor} transition-colors duration-300`}>
          <Icon size={24} className={iconColor} />
        </div>
        <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <span className={`${textColor} group-hover:${hoverTextColor} font-medium text-sm transition-colors duration-200`}>
          {ctaText}
        </span>
      </div>
    </a>
  );
};

export default ContactCard;
