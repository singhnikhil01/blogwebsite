"use client";
import { ReactNode } from 'react';
import Navbar from '../components/home/navbar/Navbar';
import FooterSection from '../components/footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='bg-gradient-to-br from-gray-900 to-black'>
      <Navbar />
      {children}
      <FooterSection/>
    </div>
  );
};

export default Layout;
