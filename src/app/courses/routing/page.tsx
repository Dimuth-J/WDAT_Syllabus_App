"use client"

import { useState } from 'react';
import Quiz from "../../quiz/page"

const HomePage = () => {

    return (
        <div className="">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr]">
                {/* Empty div for spacing on larger screens */}
                <div className=""></div>
    
                {/* Main content area */}
                <div className="">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-bold underline">Routing in Next.js</h1>
                    </div>
                    <div className="text-pretty text-justify mt-10 font-serif text-lg px-4 md:px-0">
                        <p>Routing in Next.js is handled primarily through the file system in the pages directory. 
                        Each JavaScript or TypeScript file in this directory corresponds to a route based on its file name. 
                        For example, a file named about.js would automatically be accessible at /about. Next.js also supports 
                        dynamic routing with bracketed file names, like [id].js, allowing you to create routes based on variable 
                        path segments. Additionally, the framework offers features for programmatically navigating between pages 
                        using the Link component from next/link and the router object from next/router. This makes page transitions 
                        and URL management straightforward and integrated.</p>
                    </div>
    
                    <div className="w-full h-auto px-4 md:px-10">
                        <div className="mt-8 ">
                            <iframe 
                                className=' w-full h-60 md:h-96 rounded-lg' 
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
    
                {/* Empty div for spacing on larger screens */}
                <div className=""></div>
            </div>
        </div>
    );
    
};

export default HomePage;

