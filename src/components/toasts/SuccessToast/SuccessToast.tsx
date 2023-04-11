import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const SuccessToast: React.FC = ({ children }) => {
  return (
    <div className="text-primary dark:text-gray-100 flex items-start">
      <AiFillCheckCircle className="mr-4 text-2xl flex-shrink-0" />
      {children}
    </div>
  );
};

export default SuccessToast;
