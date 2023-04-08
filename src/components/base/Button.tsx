import React from 'react';

type ButtonProps = React.HTMLAttributes<HTMLElement>;

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      className={`uppercase bg-primary dark:bg-gray-100 text-white dark:text-primary rounded-full text-base py-3 px-6 transition-colors focus:outline-none focus:shadow-outline ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
