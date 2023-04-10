import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

const WarningToast: React.FC = ({ children }) => {
  return (
    <div className="text-red-500 flex items-start">
      <AiFillWarning className="mr-4 text-2xl flex-shrink-0" />
      {children}
    </div>
  );
};

export default WarningToast;
