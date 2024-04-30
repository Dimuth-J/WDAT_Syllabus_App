"use client"

import Link from 'next/link';
import Sidebar from '../sidebar/page';
import { useState } from 'react';

const HomePage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);  // Sidebar is open by default

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            <Sidebar onToggle={toggleSidebar} isOpen={isSidebarOpen} />
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>

                <main className="p-8">
                    <div className="flex justify-center items-center">
                        <h1 className=" text-3xl font-bold underline">Web Courses</h1>
                    </div>
                    <div className="w-full h-full grid grid-cols-3 gap-5 mt-5">
                        <div className="">
                            <div className="bg-white shadow-lg rounded-xl transition duration-300 hover:scale-110">
                                <div className="p-5 h-52">
                                    <h2 className="text-2xl font-bold mb-2">Routing in Next.js</h2>
                                    <p className="text-black text-justify">Next.js routing supports static and dynamic paths, allowing seamless page transitions and optimized performance through automatic code splitting and prefetching.</p>
                                </div>
                                <div className="py-2 ps-44 bg-sky-100 rounded-b-xl">
                                    <Link href="courses/routing">
                                        <button className="ms-10 relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                            <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-teal-950 rounded-md group-hover:bg-opacity-0">
                                                Click
                                            </span>
                                        </button>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-white shadow-lg rounded-xl transition duration-300 hover:scale-110">
                                <div className="p-5 h-52">
                                    <h2 className="text-2xl font-bold mb-2">Managing HTTP Requests in Express</h2>
                                    <p className="text-black text-justify">This series covers handling GET, POST, PATCH, and DELETE HTTP requests in Express using Thunder Client and VS Code.</p>
                                </div>
                                <div className="py-2 ps-44 bg-sky-100 rounded-b-xl"> 
                                    <Link href="courses/manageHTTTPMethods">
                                        <button className="ms-10 relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                            <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-teal-950 rounded-md group-hover:bg-opacity-0">
                                                Click
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-white shadow-lg rounded-xl transition duration-300 hover:scale-110">
                                <div className="p-5 h-52">
                                    <h2 className="text-2xl font-bold mb-2">Styling in Next.js using Tailwind</h2>
                                    <p className="text-black text-justify">Next.js supports Tailwind CSS for styling, allowing efficient UI development with utility-first classes and seamless integration into components.</p>
                                </div>
                                <div className="py-2 ps-44 bg-sky-100 rounded-b-xl"> 
                                    <Link href="courses/tailwind">
                                        <button className="ms-10 relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                            <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-teal-950 rounded-md group-hover:bg-opacity-0">
                                                Click
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* YouTube Video Embed */}
                    {/* <div className="mt-8">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/ZjAqacIC_3c" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div> */}




                </main>
            </div>
        </div>
    );
};

export default HomePage;

