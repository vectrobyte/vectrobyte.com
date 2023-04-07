import React from 'react';

type TextareaProps = React.HTMLAttributes<HTMLElement>;

const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`w-full h-32 bg-white dark:bg-secondary text-gray-900 mt-2 py-3 px-6 rounded-3xl focus:outline-none focus:shadow-outline ${className}`}
      {...props}
    />
  );
};

export default Textarea;
