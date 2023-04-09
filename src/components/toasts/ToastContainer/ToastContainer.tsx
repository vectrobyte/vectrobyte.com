import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Slide, ToastContainer } from 'react-toastify';

const CloseIcon = () => (
  <span>
    <AiOutlineClose size="14" className="text-gray-600 justify-self-end ml-4" />
  </span>
);

const ToastContainerWrapper: React.FC = () => {
  return (
    <ToastContainer
      transition={Slide}
      closeButton={CloseIcon}
      toastClassName={() =>
        `bg-white border-gray-200 dark:bg-dark-800 dark:border-dark-700 text-white min-h-14 flex m-4 p-4 rounded-lg cursor-pointer lg:min-w-560`
      }
      toastStyle={{
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 18%)',
      }}
      bodyClassName={() => 'flex-1'}
    />
  );
};

export default ToastContainerWrapper;
