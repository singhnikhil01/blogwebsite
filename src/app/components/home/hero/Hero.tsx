"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUpRight, FiDownload } from "react-icons/fi";

// Dynamically import framer-motion (Client-side only to avoid hydration mismatch)
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const TypeAnimation = dynamic(() => import("react-type-animation").then((mod) => mod.TypeAnimation), { ssr: false });

export default function Hero() {
  // State to control animation only after hydration
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Nikhil Singh - Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Hi, I'm Nikhil Singh, a Full Stack Developer and AI Enthusiast. Explore my portfolio and projects." />
        <meta name="keywords" content="Nikhil Singh, Full Stack Developer, AI Enthusiast, Web Development, Machine Learning" />
        <meta name="author" content="Nikhil Singh" />
      </Head>

      <section className="min-h-screen w-full px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto lg:mt-[10%] flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center">
          
          {/* Left Content (Text) - Server Rendered */}
          <div className="flex-1 space-y-8">
            <h2 className="mb-4 text-lg text-gray-400">Welcome to my world</h2>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-500 via-white to-blue-500 bg-clip-text text-transparent">
              Hi, I&apos;m Nikhil Singh
            </h1>

            {/* Typewriter Animation (Client-Side) */}
            {isMounted && (
              <TypeAnimation
                sequence={["Full Stack Developer", 2000, "AI Enthusiast", 2000, "Tech Explorer", 2000]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-xl font-medium text-gray-300 md:text-2xl lg:text-3xl mt-4"
              />
            )}

            <p className="text-lg text-gray-300 md:text-xl">
              Crafting digital experiences through innovative code and cutting-edge technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 font-medium text-white shadow-lg shadow-blue-500/20">
                Explore Portfolio
                <FiArrowUpRight className="h-5 w-5" />
              </a>

              <a href="/cv.pdf" download className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:border-gray-600">
                Download CV
                <FiDownload className="h-5 w-5 text-green-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {[
                { icon: FiGithub, link: '#', color: 'text-gray-300 hover:text-white' },
                { icon: FiLinkedin, link: '#', color: 'text-blue-400 hover:text-blue-300' },
                { icon: FiTwitter, link: '#', color: 'text-sky-400 hover:text-sky-300' },
              ].map((social, i) => (
                <a key={i} href={social.link} className={`${social.color} transition-colors`}>
                  <social.icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Image Section - Only Animates After Hydration */}
          {isMounted && (
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:max-w-md"
            >
              <div className="relative aspect-square w-full max-w-xl sm:max-w-sm overflow-hidden">
                {/* Floating Image Container */}
                <MotionDiv animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/10 backdrop-blur-lg">
                  <Image src="/images/nikhil.png" alt="Nikhil Singh" width={400} height={400} className="h-full w-full object-cover" priority />
                </MotionDiv>

                {/* Dynamic Border */}
                <MotionDiv animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-800 border-r-orange-400" />
              </div>
            </MotionDiv>
          )}
        </div>

        <div className="w-[70%] mx-auto h-px bg-gradient-to-r from-transparent bg-orange-600 to-transparent mt-[12%]" />
      </section>
    </>
  );
}
