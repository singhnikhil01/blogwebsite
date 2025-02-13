
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaDiscord,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const userEmail = 'singhnikhil03@outlook.com'
export const location = 'Amritapuri, Kerala , India'
export const center = [9.0910878, 76.4902126]
export const Phone =  +917481030330

export  const socialLinks = [
    {
      icon: <FaLinkedin className="w-8 h-8 text-[#0A66C2]" />,
      title: "LinkedIn",
      text: "Let's connect professionally",
      link: "https://linkedin.com/in/yourprofile",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <FaGithub className="w-8 h-8 text-gray-800 dark:text-gray-200" />,
      title: "GitHub",
      text: "Explore my projects & contributions",
      link: "https://github.com/yourprofile",
      color: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    {
      icon: <FaTwitter className="w-8 h-8 text-[#1DA1F2]" />,
      title: "Twitter",
      text: "Daily insights & tech updates",
      link: "https://twitter.com/yourhandle",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <FaDiscord className="w-8 h-8 text-[#5865F2]" />,
      title: "Discord",
      text: "Join my developer community",
      link: "https://discord.gg/yourinvite",
      color: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
    },
    {
      icon: <SiGmail className="w-8 h-8 text-[#EA4335]" />,
      title: "Gmail",
      text: "Send me an email directly",
      link: "mailto:your.email@example.com",
      color: "hover:bg-red-50 dark:hover:bg-red-900/20"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-[#4285F4]" />,
      title: "Book a Call",
      text: "Schedule a meeting",
      link: "https://calendly.com/yourprofile",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    }
  ];