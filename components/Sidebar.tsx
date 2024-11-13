"use client";

import React, { useState, useEffect } from 'react';
import "@/app/globals.css";
import { useRouter, usePathname } from 'next/navigation';
import {
  FaHome,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaCertificate,
  FaUserCircle,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Image from 'next/image';
import { MenuItem } from '@/lib/types/MenuItem';

// Define menu items without submenus
const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: <FaHome />, path: '/' },
  { name: 'Event', icon: <FaCalendarAlt />, path: '/event' },
  { name: 'Member', icon: <FaUser />, path: '/member' },
  { name: 'Blast Message', icon: <FaEnvelope />, path: '/blast-message' },
  { name: 'Certification', icon: <FaCertificate />, path: '/certification' },
  { name: 'Profile', icon: <FaUserCircle />, path: '/profile' },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const handleMenuClick = (item: MenuItem) => {
    setActive(item.path);
    router.push(item.path);
    setIsOpen(false);
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 text-white bg-gray-800 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Sidebar navigation */}
      <nav
        className={`fixed top-0 left-0 h-full ${
          isOpen ? 'w-64' : 'w-0'
        } md:w-64 bg-gray-800 text-white pt-3 pb-4 px-6 flex flex-col justify-between z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-all duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="flex flex-col h-full pt-2"> {/* Adjusted to pt-2 for subtle padding */}
          {/* Logo and title */}
          <div className="flex items-center mb-6">
            <Image
              src="/logo.png"
              alt="App Logo"
              className="h-10 mx-auto"
              width={40}
              height={40}
            />
            <span className="text-lg font-semibold ml-2 md:text-xl md:ml-4 md:block">E-Cell SRMUH</span>
          </div>

          {/* Menu items */}
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <div
                  className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                    active === item.path
                      ? 'bg-gray-700 text-yellow-500'
                      : 'hover:bg-gray-700 hover:text-yellow-500'
                  }`}
                  onClick={() => handleMenuClick(item)}
                  role="button"
                  aria-pressed={active === item.path}
                >
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'h-5 w-5' })}
                  <span className="ml-3 text-lg">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center mt-auto">
          <span className="text-sm hidden sm:block">© 2024 E-Cell SRMUH</span>
        </div>
      </nav>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
