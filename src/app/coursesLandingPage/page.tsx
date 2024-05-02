"use client"

import Link from 'next/link';
// import Sidebar from '../sidebar/page';
import { useState } from 'react';

const HomePage = () => {

    return (
        <div className="p-6">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold underline">Web Courses</h1>
            </div>
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 mt-5">
                <div className="">
                    <div className="bg-white shadow-lg rounded-xl transition duration-300 hover:scale-110">
                        <Link href="courses/routing">
                            <div className="p-5 h-auto min-h-52">
                                <h2 className="text-2xl font-bold mb-2 text-center h-16">Routing in Next.js</h2>
                                <p className="text-black text-justify">Next.js routing supports static and dynamic paths, allowing seamless page transitions and optimized performance through automatic code splitting and prefetching.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="bg-white shadow-lg rounded-xl transition duration-300 hover:scale-110">
                        <Link href="courses/manageHTTTPMethods">
                            <div className="p-5 h-auto min-h-52">
                                <h2 className="text-2xl font-bold mb-2 text-center">Managing HTTP Requests in Express</h2>
                                <p className="text-black text-justify">This series covers handling GET, POST, PATCH, and DELETE HTTP requests in Express using Thunder Client and VS Code.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="bg-white shadow-lg rounded-xl transition duration-300 hover:scale-110">
                        <Link href="courses/tailwind">
                            <div className="p-5 h-auto min-h-52">
                                <h2 className="text-2xl font-bold mb-2 text-center">Styling in Next.js using Tailwind</h2>
                                <p className="text-black text-justify">Next.js supports Tailwind CSS for styling, allowing efficient UI development with utility-first classes and seamless integration into components.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default HomePage;

