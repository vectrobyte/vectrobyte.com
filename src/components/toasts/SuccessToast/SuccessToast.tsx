import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const SuccessToast: React.FC = ({ children }) => {
  return (
    <div className="text-gray-600 flex items-start">
      <AiFillCheckCircle className="mr-4" />
      {children}
    </div>
  );
};

export default SuccessToast;
