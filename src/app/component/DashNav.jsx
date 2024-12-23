'use client';

import Link from 'next/link';
import { CgMenuLeftAlt } from 'react-icons/cg';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { SideBarContext } from '../providers';

export default function DashNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const {cart} = useContext(SideBarContext)
  

  const inactivityTimeout = useRef(null);

  useEffect(() => {
    setMounted(true);

    const handleUserInteraction = () => {
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }

      if (!dropdownOpen) {
        setDropdownOpen(true);
      }

      setMessage('');
      inactivityTimeout.current = setTimeout(() => {
        setDropdownOpen(false);
      }, 1000); 
    };

    window.addEventListener('mousemove', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);
    

    return () => {
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
    };
  }, [dropdownOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }} className="flex flex-col sm:text-sm md:text-base lg:text-base bg-gray-400">
      <ul className="flex justify-between items-center lg:p-2">
        <div >
          <div className="relative" onMouseEnter={openDropdown}>
          <button
            className="h-[40px] px-4 text-gray-800 hover:bg-gray-200 rounded-md focus:outline-none"
            onClick={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <div className="flex items-center gap-2">
              <span>Menu</span>
              <CgMenuLeftAlt size={20} />
            </div>
          </button>
          {dropdownOpen && (
            <ul
              className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-40 z-20"
              role="menu"
              
            >
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/">Home</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/Cart">Cart</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/About">About</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/Support">Support</Link>
              </li>
            </ul>
          )}
          </div>

          
        </div>

        <li className="font-bold text-gray-800">A-Group, LLC </li>

        <div className="text-gray-800 cursor-pointer px-4 rounded-md h-[40px] flex justify-center items-center content-center">
          <ul className=" px-4 py-2 hover:scale-110 transform transition-transform duration-400">
            <Link  href="/UpdatedCart">
            <div className='flex space-x-1 items-start'>
            <FaCartPlus style={{ color: isHovered ? "red" : "black", transition: "color 0.3s ease", }} size={25} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
            <li><sup className='lg:text-sm bg-red-500 md:px-3 sm:px-2 lg:px-3 py-1 rounded-full text-white'>{cart}</sup></li>
            </div>
              
            </Link>
          </ul>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link href="/Support">Login</Link>
          </li>
        </div>

      </ul>
    </nav>
  );
}
