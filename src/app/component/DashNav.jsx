'use client';

import Link from 'next/link';
import { CgMenuLeftAlt } from 'react-icons/cg';
import React, { useState, useEffect, useRef } from 'react';

export default function DashNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState('');

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
      }, 2000); 
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
        <div className="relative" onMouseEnter={openDropdown}>
          <button
            className="h-[40px] px-4 text-gray-800 hover:bg-gray-200 rounded-md focus:outline-none"
            onClick={toggleDropdown}
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
              onMouseLeave={closeDropdown}
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

        <li className="font-bold text-gray-800">A-Group, LLC </li>

        <ul className="text-gray-800 hover:underline cursor-pointer px-4 hover:bg-gray-200 rounded-md h-[40px] flex justify-center items-center content-center">
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link href="/Support">Support</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link href="/Support">Login</Link>
          </li>
        </ul>

        {/* {message && <div className="absolute bottom-0 left-0 text-sm text-red-600">{message}</div>} */}
      </ul>
    </nav>
  );
}
