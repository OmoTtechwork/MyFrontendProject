'use client';

import Link from 'next/link';
import { CgMenuLeftAlt } from 'react-icons/cg';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { SideBarContext } from '../providers';

export default function DashNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { cart } = useContext(SideBarContext); 

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  
  const outsideClickRef = useRef(null);

  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event) => {
      if (outsideClickRef.current && !outsideClickRef.current.contains(event.target)) {
        // Set a delay before closing dropdown
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current); // Clear any previous timeout
        }

        closeTimeoutRef.current = setTimeout(() => {
          setDropdownOpen(false); 
        }, 2000);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current); 
      }
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
      className="flex flex-col sm:text-sm md:text-base lg:text-base bg-gray-400"
    >
      <ul className="flex justify-between items-center lg:p-2">
        <div className="relative" ref={outsideClickRef}>
          <button
            ref={buttonRef}
            className="h-[40px] px-4 text-gray-800 hover:bg-gray-200 rounded-md focus:outline-none"
            onClick={toggleDropdown} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          >
            <div className="flex items-center gap-2">
              <span>Menu</span>
              <CgMenuLeftAlt size={20} />
            </div>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <ul
              className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-40 z-20"
              role="menu"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter} 
            >
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/" onClick={() => setDropdownOpen(false)}>Home</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/Shop" onClick={() => setDropdownOpen(false)}>Shop</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/About" onClick={() => setDropdownOpen(false)}>About</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/Support" onClick={() => setDropdownOpen(false)}>Support</Link>
              </li>
            </ul>
          )}
        </div>

        <li className="font-bold text-gray-800">A-Group, LLC</li>

        <div className="text-gray-800 cursor-pointer px-4 rounded-md h-[40px] flex justify-center items-center content-center">
          <ul className=" px-4 py-2 hover:scale-110 transform transition-transform duration-400">
            <Link href="/Cart">
              <div className="flex space-x-1 items-start">
                <FaCartPlus
                  style={{
                    color: isHovered ? 'red' : 'black',
                    transition: 'color 0.3s ease',
                  }}
                  size={25}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                <li>
                  <sup className="lg:text-sm bg-red-500 md:px-3 sm:px-2 lg:px-3 py-1 rounded-full text-white">
                    {cart.length}
                  </sup>
                </li>
              </div>
            </Link>
          </ul>
        </div>
      </ul>
    </nav>
  );
}
