"use client"

import { useState, FC } from 'react';
import Link from 'next/link';
import { FiMenu, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { RxDot } from "react-icons/rx";

type NavItem = {
    label: string;
    subNav?: NavItem[];
    path?: string;
    alwaysShow?: boolean;
};

const navItems: NavItem[] = [
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

type SidebarProps = {
    onToggle: (isOpen: boolean) => void;
};

const Sidebar: FC<SidebarProps> = ({ onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen);  // Notify parent component
    };

    const handleSelect = (index: number) => {
        setSelected(selected === index ? null : index);
    };

    return (
        <div className={`fixed top-0 left-0 h-full bg-teal-950 text-white transition-all duration-300 ease-linear ${isOpen ? 'w-64' : 'w-16'}`}>
            <button className="absolute top-0 right-0 p-4 text-xl text-white" onClick={handleToggle}>
                <FiMenu />
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                {navItems.map((item, index) => (
                    <div key={index}>
                        {item.path || item.alwaysShow || item.subNav ? (
                            <Link href={item.path ?? '#'}>
                                <div onClick={() => handleSelect(index)} className="flex items-center p-3 hover:bg-teal-900 cursor-pointer">
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
    );
};

export default Sidebar;
