import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

type InputBase = React.HTMLAttributes<HTMLElement> & {
  label?: string;
  error?: string;
  labelClass?: string;
};

const InputBase: React.FC<InputBase> = ({ id, label, error, children, labelClass = '' }) => {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={`uppercase mb-2 text-sm dark:text-gray-300 transition-colors ${labelClass}`}
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="text-sm flex items-start text-red-600 my-1 px-6">
          <AiFillWarning className="text-red-600 dark:text-white mr-1 mt-0.5" size="16" />
          <span>{error}</span>
        </span>
      )}
    </>
  );
};

export default InputBase;
