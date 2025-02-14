"use client";

import { useState, useRef, useEffect, JSX } from "react";
import { Menu, X } from "lucide-react";

const NavbarClient = ({
  navItems,
}: {
  navItems: { name: string; href: string; icon: JSX.Element }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-16 right-0 w-[60%] bg-black/80 p-5 rounded-lg shadow-lg"
        >
          <div className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                download={item.name === "Resume" ? "Nikhils_Resume.pdf" : undefined}
                target={item.name == "Resume" ? "_blank" : "_self"}
                rel={item.name === "Resume" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 text-white py-2 hover:text-orange-400 transition"
              >
                {item.icon}{" "}
                <span className="font-mono size-6">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarClient;
