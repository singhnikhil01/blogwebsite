"use client";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const FooterSection = () => {
  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      url: "https://instagram.com/yourusername",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 px-6 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-700">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-700">
              Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                
                "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPWTbabsEqWzNimubUwCFRt9kg23QrYSey6Goc",
                "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPUYPwlo29tEj8GdBrzuSV1InsKa4qgYUpN0Lx",
              ].map((src, index) => (
                <div
                  key={index}
                  className="w-full h-20"
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={320}
                    height={80}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-700">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="w-5 h-5 text-orange-500" />
                <a
                  href="tel:+917481030330"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  +91 7481030330
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="w-5 h-5 text-blue-500" />
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  singhnikhil03@outlook.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-5 h-5 text-purple-500" />
                <p className="text-gray-400">Amritapuri, Kerala</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 my-8"></div>
        <div className="flex flex-col justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright Notice */}
          <div className="text-center text-gray-400">
            <p className="mt-6">
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Designed and developed with ❤️ by{" "}
              <a
                href="https://github.com/singhnikhil01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-blue-500 transition-colors"
              >
                Nikhil Singh
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
