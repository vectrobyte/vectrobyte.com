import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ loading, disabled, children, className = '' }) => {
  return (
    <button
      className={`
      uppercase relative text-base py-3 px-6 rounded-full
      bg-primary hover:bg-secondary dark:bg-gray-100 hover:dark:bg-white text-white dark:text-primary transition-colors
      focus:outline-none focus:shadow-outline
      ${disabled || loading ? 'opacity-80 cursor-not-allowed' : ''}
      ${className}
      `}
    >
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <BiLoaderAlt size={24} color="inherit" className="animate-spin" />
        </div>
      )}
      <div className={`${loading ? 'opacity-0' : ''}`}>{children}</div>
    </button>
  );
};

export default Button;
