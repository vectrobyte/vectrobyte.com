import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Slide, ToastContainer } from 'react-toastify';

const CloseIcon = () => (
  <span>
    <AiOutlineClose className="!text-2xl text-gray-600 dark:text-gray-300 justify-self-end ml-4" />
  </span>
);

const ToastContainerWrapper: React.FC = () => {
  return (
    <ToastContainer
      transition={Slide}
      closeButton={CloseIcon}
      toastClassName={() =>
        `flex m-4 p-4 rounded-lg cursor-pointer min-h-14
         bg-white dark:bg-gray-800  border-gray-200 dark:border-gray-700 dark:text-white
        `
      }
      toastStyle={{
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 18%)',
      }}
      bodyClassName={() => 'flex-1'}
      className="!w-max !max-w-[80%] lg:!max-w-[800px]"
    />
  );
};

export default ToastContainerWrapper;
