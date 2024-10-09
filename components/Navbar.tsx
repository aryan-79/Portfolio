"use client";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { PiSunFill } from "react-icons/pi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    document.querySelector("nav ul")?.classList.toggle("nav-active");
  };

  return (
    <header className="navbar">
      <motion.div
        className="navbar__wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <nav>
          <ul>
            <li onClick={handleOpen}>
              <Link href="#home">Home</Link>
            </li>
            <li onClick={handleOpen}>
              <Link href="#about">About</Link>
            </li>
            <li onClick={handleOpen}>
              <Link href="#projects">Projects</Link>
            </li>
            <li onClick={handleOpen}>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div id="mobile-nav" onClick={handleOpen}>
            {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </div>
        </nav>
        <div className="toggle__theme" onClick={toggleTheme}>
          {theme === "dark" ? <FaMoon size={20} /> : <PiSunFill size={20} />}
          <div className="tooltip">Toggle Theme</div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
