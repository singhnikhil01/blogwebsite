import {
    Home,
    // Book,
    Images,
    FolderKanban,
    FileText,
    Mail,
    User,
    
  } from "lucide-react";
export const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <Home size={22} className="text-blue-500" />,
    },
    {
      name: "Projects",
      href: "projects",
      icon: <FolderKanban size={22} className="text-orange-500" />,
    },
    // {
    //   name: "Blogs",
    //   href: "/blogs",
    //   icon: <Book size={22} className="text-yellow-500" />,
    // },
    {
      name: "Gallery",
      href: "/gallery",
      icon: <Images size={22} className="text-red-500" />,
    },
    {
      name: "About",
      href: "/about",
      icon: <User size={22} className="text-green-500" />,
    }, 

    {
      name: "Contact",
      href: "contacts",
      icon: <Mail size={22} className="text-teal-400" />,
    },
    {
      name: "Resume",
      href: "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPwpPdZurRtVSk0pHzEmaKBxbl9hC2fiLr4cdA",
      icon: <FileText size={22} className="text-purple-500" />,
    },
   
  ];
