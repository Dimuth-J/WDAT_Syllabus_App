"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiArrowDownCircle, FiLogOut,FiChevronRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
// import Mylogo from "@/assets/images/Mylogo.png";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Web",
    link: "/web",
    children: [
      {
        label: "NextJs 14",
        link: "/nextjs",
      },
      {
        label: "TypeScript",
        link: "/typescript",
      },
      {
        label: "Auth0 Integration",
        link: "/auth0-integration",
      },
      {
        label: "Stripe",
        link: "/stripepayments",
      },
    ],
  },
  {
    label: "Server",
    link: "#",
    children: [
      {
        label: "NodeJS",
        link: "#",
      },
      {
        label: "PostgreSQL",
        link: "#",
      },
      {
        label: "Golang",
        link: "#",
      },
      {
        label: "Redis",
        link: "#",
      },
      {
        label: "Auth0 Authentication",
        link: "#",
      },
      {
        label: "Stripe",
        link: "#",
      },
    ],
  },
  {
    label: "Mobile",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
];

export default function Navbar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  function toggleSideMenu() {
    setIsSideMenuOpen(!isSideMenuOpen);
    setOpenSubMenu(null); // Reset sub-menu state when toggling the side menu
  }

  function toggleSubMenu(itemLabel: string) {
    if (openSubMenu === itemLabel) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(itemLabel);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
      <section className="flex items-center gap-10">
        <Link href="/">
            {/* <Image src={Mylogo} alt="logo" width={112} height={56} /> */}
            </Link>
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <div key={index} className="group relative">
              <Link href={item.link ?? "#"} className="flex items-center px-2 py-3 transition duration-200 ease-in-out hover:text-blue-500">
                <span>{item.label}</span>
                {item.children && <FiArrowDownCircle className="ml-2" />}
              </Link>
              {item.children && (
                <div className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-lg py-3 left-2 top-full group-hover:transition group-hover:duration-1000">
                  {item.children.map((child, childIndex) => (
                    <Link key={childIndex} href={child.link ?? "#"} className="px-6 py-1 transition duration-500 ease-in-out hover:bg-gray-100">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center">
        <Link href="/api/auth/logout" className="flex items-center gap-2 text-neutral-700 hover:text-blue-500 transition duration-200 ease-in-out">
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </Link>
        <FiMenu onClick={toggleSideMenu} className="cursor-pointer text-4xl md:hidden ml-4" />
      </div>

      {isSideMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 md:hidden">
          <div className="relative w-2/3 h-full bg-white p-5">
            <AiOutlineClose onClick={toggleSideMenu} className="cursor-pointer text-3xl" />
            <div className="mt-10 space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="block p-2 text-neutral-700 hover:bg-gray-200">
                  <Link href={item.link ?? "#"} className="flex justify-between items-center">
                    <span>{item.label}</span>
                    {item.children && (
                      <FiChevronRight onClick={() => toggleSubMenu(item.label)} className="ml-2" />
                    )}
                  </Link>
                  {item.children && item.label === openSubMenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child, childIndex) => (
                        <Link key={childIndex} href={child.link ?? "#"} className="block px-2 py-1 text-sm text-neutral-500 hover:text-neutral-700">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
