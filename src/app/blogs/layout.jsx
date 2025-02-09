import React, { Children } from "react";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Marketing",
    excerpt: "Explore how AI is transforming digital marketing and what to expect in the coming years.",
    image: "/blog1.jpg",
    link: "/blog/future-of-ai-marketing"
  },
  {
    id: 2,
    title: "Building Scalable Web Apps with Next.js",
    excerpt: "A guide to creating high-performance, scalable web applications using Next.js and TypeScript.",
    image: "/blog2.jpg",
    link: "/blog/scalable-nextjs-apps"
  },
  {
    id: 3,
    title: "Why TypeScript is Essential for Modern Development",
    excerpt: "Discover the benefits of using TypeScript in large-scale applications and how it improves development.",
    image: "/blog3.jpg",
    link: "/blog/typescript-modern-development"
  }
];

const Layout = () => {
  return (
  <>
  <div className="blog-landing">
    {Children}
    </div>
  </>
  );
};

export default Layout;
