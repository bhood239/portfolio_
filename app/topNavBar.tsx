"use client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
type Props = { title?: string };
export default function TopNavBar({ title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    isOpen == false ? setIsOpen(true) : setIsOpen(false);
  };
  return (
    <nav className="fixed left-0 right-0 top-0 bg-black p-4 pl-14 pr-14 shadow-md z-50 opacity-75">
      <button className="text-white lg:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <ul
        className={`flex-col lg:flex lg:flex-row lg:items-center absolute lg:static top-12 left-0 right-0 bg-black lg:bg-transparent lg:h-auto lg:w-auto z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <a href="#home" className="text-white hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
