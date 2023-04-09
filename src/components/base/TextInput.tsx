import React from 'react';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<TextInputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full bg-white dark:bg-secondary dark:text-gray-300 mt-2 py-3 px-6 rounded-full focus:outline-none focus:shadow-outline ${className}`}
      type="text"
      placeholder=""
      {...props}
    />
  );
};

export default TextInput;
