import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const WarningToast: React.FC = ({ children }) => {
  return (
    <div className="text-gray-600 flex items-start">
      <AiFillWarning className="mr-4" />
      {children}
    </div>
  );
};

export default WarningToast;
