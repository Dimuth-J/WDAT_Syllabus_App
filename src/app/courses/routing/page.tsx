"use client"


import Sidebar from '../../sidebar/page';
import { useState } from 'react';
import Quiz from "../../quiz/page"

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
                    <div className="w-full h-full grid grid-cols-[1fr_4fr_1fr]">
                        <div className=""></div>
                        <div className="">
                            <div className="flex justify-center items-center">
                                <h1 className=" text-3xl font-bold underline">Routing in Next.js</h1>
                            </div>
                            <div className=" text-pretty text-justify mt-10 font-serif text-lg">
                                <p className="">Routing in Next.js is handled primarily through the file system in the pages directory. 
                                Each JavaScript or TypeScript file in this directory corresponds to a route based on its file name. 
                                For example, a file named about.js would automatically be accessible at /about. Next.js also supports 
                                dynamic routing with bracketed file names, like [id].js, allowing you to create routes based on variable 
                                path segments. Additionally, the framework offers features for programmatically navigating between pages 
                                using the Link component from next/link and the router object from next/router. This makes page transitions 
                                and URL management straightforward and integrated.</p>
                            </div>

                            <div className=" w-full h-auto px-10">
                                <div className="mt-8">
                                    <iframe 
                                        width="100%" 
                                        height="400" 
                                        src="https://www.youtube.com/embed/Vm7qM1wmXwE" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            <div className="">
                                <Quiz/>
                            </div>
                        
                        </div>
                        <div className=""></div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default HomePage;

