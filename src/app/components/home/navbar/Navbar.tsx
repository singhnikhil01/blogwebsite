import Link from "next/link";
import { navItems } from "@/app/constants/Navbar/navItems";
import NavbarClient from "./NavClient";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%]  from-gray-900/50 border border-white/20 shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between">
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-blue-500 tracking-wider drop-shadow-lg font-orbitron">
        NikhilSingh
      </h1>
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-white hover:text-orange-400 transition"
          >
            {item.icon} <span className="hidden lg:inline">{item.name}</span>
          </Link>
        ))}
      </div>
      <NavbarClient navItems={navItems} />
    </nav>
  );
};

export default Navbar;
