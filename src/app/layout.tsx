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
        
        <div>
            <main>
                {children}
            </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
