import React, { ReactNode, useEffect } from 'react';

import Navbar from '../components/Navbar';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-white dark:bg-secondary transition-colors">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
