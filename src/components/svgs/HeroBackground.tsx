import React from 'react';

const HeroBackground: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <svg
      width="725"
      height="990"
      viewBox="0 0 725 990"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="663.973"
        y="-454"
        width="1270.03"
        height="939"
        rx="15"
        transform="rotate(45 663.973 -454)"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="663.973"
          y1="-454"
          x2="1559.63"
          y2="757.412"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6A98F0" />
          <stop offset="1" stopColor="#4961DC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroBackground;
