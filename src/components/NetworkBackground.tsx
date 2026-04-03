
import React from 'react';

const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="#e5e7eb" opacity="0.5"/>
            <circle cx="80" cy="40" r="1.5" fill="#e5e7eb" opacity="0.3"/>
            <circle cx="50" cy="70" r="1" fill="#e5e7eb" opacity="0.4"/>
            <circle cx="10" cy="80" r="1.5" fill="#e5e7eb" opacity="0.2"/>
            <circle cx="90" cy="10" r="1" fill="#e5e7eb" opacity="0.3"/>
            <line x1="20" y1="20" x2="80" y2="40" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.2"/>
            <line x1="80" y1="40" x2="50" y2="70" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.15"/>
            <line x1="50" y1="70" x2="10" y2="80" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.1"/>
            <line x1="20" y1="20" x2="90" y2="10" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)"/>
      </svg>
    </div>
  );
};

export default NetworkBackground;
