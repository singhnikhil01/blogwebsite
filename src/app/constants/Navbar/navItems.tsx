import {
    Home,
    Book,
    Image,
    Briefcase,
    FileText,
    Mail,
    User,
  } from "lucide-react";
export const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: <Home size={22} className="text-blue-500" />,
    },
    {
      name: "Experience",
      href: "#experience",
      icon: <Briefcase size={22} className="text-orange-500" />,
    },
    {
      name: "Blogs",
      href: "#blogs",
      icon: <Book size={22} className="text-yellow-500" />,
    },
    {
      name: "Gallery",
      href: "#gallery",
      // eslint-disable-next-line jsx-a11y/alt-text
      icon: <Image size={22} className="text-red-500" />,
    },
    {
      name: "About",
      href: "#about",
      icon: <User size={22} className="text-green-500" />,
    }, 
    {
      name: "Resume",
      href: "#resume",
      icon: <FileText size={22} className="text-purple-500" />,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <Mail size={22} className="text-teal-400" />,
    },
  ];
