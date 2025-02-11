"use client";
import { ReactNode } from 'react';
import Navbar from '../components/home/navbar/Navbar';
import FooterSection from '../components/footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection/>
    </>
  );
};

export default Layout;
