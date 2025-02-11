import { ReactNode } from 'react';
import React from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className=''>
      {children}
    </div>
  );
};

export default Layout;
