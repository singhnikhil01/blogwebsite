"use client";
import { ReactNode } from 'react';
import Navbar from '../components/home/navbar/Navbar';
import FooterSection from '../components/footer/Footer';
import React from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className=''>
      <Navbar />
      {children}
      <FooterSection/>
    </div>
  );
};

export default Layout;
