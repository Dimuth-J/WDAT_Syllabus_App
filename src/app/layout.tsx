"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { FiMenu, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { RxDot } from "react-icons/rx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  const navItems = [
    { label: 'Home', path: '/test' },
    {
      label: 'Course',
      subNav: [
        { label: 'Web', path: '/coursesLandingPage' },
        { label: 'Server', path: '/home' },
      ],
      alwaysShow: true
    },
    {
      label: 'About',
      subNav: [
        { label: 'Team', path: '/home' },
        { label: 'Company', path: '/home' },
      ],
      alwaysShow: true
    },
    { label: 'Services', path: '/home' },
    { label: 'Contact', path: '/home' },
  ];

  return (
    <html lang="en">
      <body>
        <div className={`fixed top-0 left-0 h-full bg-teal-950 text-white transition-all duration-300 ease-linear ${isOpen ? 'w-64' : 'w-16'}`}>
            <button className="absolute top-0 right-0 p-4 text-xl text-white" onClick={handleToggle}>
                <FiMenu />
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                {navItems.map((item, index) => (
                    <div key={index}>
                        {item.path || item.alwaysShow || item.subNav ? (
                            <Link href={item.path ?? '#'}>
                                <div className="flex items-center p-3 hover:bg-teal-900 cursor-pointer" onClick={() => handleSelect(index)}>
                                    {item.subNav ? (selected === index ? <FiChevronDown className="mr-2" /> : <FiChevronRight className="mr-2" />) : null}
                                    {item.label}
                                </div>
                            </Link>
                        ) : null}
                        {selected === index && item.subNav && (
                            <div className="pl-8">
                                {item.subNav.map((subItem, subIndex) => (
                                    <Link href={subItem.path || '#'} key={subIndex}>
                                        <div className='flex items-center p-1 hover:bg-teal-900 cursor-pointer'>
                                            <RxDot className="mr-2" />{subItem.label}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <div className={`flex-1 p-3 md:p-10 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
            <main>
                {children}
            </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
