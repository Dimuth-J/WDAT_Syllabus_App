"use client"

import Image from "next/image";
import bgImage from "../../../public/assert/images/bg1.png";
import Sidebar from '../sidebar/page';
import { useState } from 'react';
import Link from "next/link";

const HomePage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);  // Sidebar is open by default

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            <Sidebar onToggle={toggleSidebar} isOpen={isSidebarOpen} />
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
           
                <Image
                    src={bgImage}
                    fill
                    alt="bg-image"
                    className="absolute inset-0 w-full h-full object-cover opacity-100 z-[-10]"
                />
                <main className="p-8">
                    <div className="w-full h-full grid grid-cols-2">
                        <div className="">
                            <h1 className="font-bold text-5xl ">Next Js</h1>
                            <p className=" my-10 px-20 text-justify">
                                Next.js is an open-source React framework for building efficient and scalable server-side 
                                rendered and statically generated web applications. It offers features like automatic code 
                                splitting, optimized performance, and simplified page routing
                            </p>

                            <Link href="/nextInfo">
                                <button className="ms-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                    <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-teal-950 rounded-md group-hover:bg-opacity-0">
                                        More Info...
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HomePage;

