"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-20 bg-[#121212] border-b border-[#33353F]">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-2xl md:text-3xl text-white font-semibold">
          LOGO
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden text-slate-200 hover:text-white focus:outline-none"
        >
          {navbarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} className="text-slate-200 hover:text-white">
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="md:hidden bg-[#121212]">
          <ul className="flex flex-col space-y-4 py-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={() => setNavbarOpen(false)}
                  className="text-slate-200 hover:text-white text-lg"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
