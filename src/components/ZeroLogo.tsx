import React from 'react';

interface ZeroLogoProps {
  className?: string;
}

export function ZeroLogo({ className = "h-6 w-6" }: ZeroLogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} zero-logo`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="48" 
        fill="#1a1f2e"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Outer ring with dots */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeDasharray="70 30"
      />

      {/* Four corner dots */}
      <circle cx="50" cy="10" r="4" fill="currentColor" />
      <circle cx="50" cy="90" r="4" fill="currentColor" />
      <circle cx="10" cy="50" r="4" fill="currentColor" />
      <circle cx="90" cy="50" r="4" fill="currentColor" />

      {/* Inner ring segments */}
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeDasharray="50 25"
      />

      {/* ZK Letters */}
      <g transform="translate(50,50) scale(0.4)">
        {/* Z */}
        <path
          d="M-35,-20 L-15,-20 L-35,20 L-15,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* K */}
        <path
          d="M15,-20 L15,20 M15,0 L35,-20 M15,0 L35,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="currentColor" floodOpacity="0.3" />
        </filter>
      </defs>
    </svg>
  );
}