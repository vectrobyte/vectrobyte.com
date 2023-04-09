import React from 'react';

type Anchor = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor: React.FC<Anchor> = ({ href, children, className = '', ...props }) => {
  return (
    <a
      href={href}
      className={`text-gray-700 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-200 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Anchor;
