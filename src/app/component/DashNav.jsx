'use client';

import Link from 'next/link';
import { CgMenuLeftAlt } from 'react-icons/cg';
import React, { useState } from 'react';

export default function DashNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(true); 
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="flex flex-col bg-gray-400">
      <ul className="flex justify-between items-center p-2">
        <div className="relative" onMouseLeave={closeDropdown}>
          <button
            className="h-[40px] px-4 text-gray-800 hover:bg-gray-200 rounded-md focus:outline-none"
            onClick={toggleDropdown}>
            <div className="flex items-center gap-2">
              <span>Menu</span>
              <CgMenuLeftAlt size={20} />
            </div>
          </button>

          {dropdownOpen && (
            <ul
              className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-40 z-20"
              role="menu">
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

        <li className="font-bold text-lg text-gray-800">A-Group, LLC (RealEstate)</li>
        <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/Support">Support</Link>
              </li>

        <li className=" text-gray-800 hover:underline cursor-pointer px-4 hover:bg-gray-200 rounded-md h-[40px] flex justify-center items-center content-center">Login</li>
      </ul>
    </nav>
  );
}
