"use client"


// import Sidebar from '../../sidebar/page';
import { useState } from 'react';
import Quiz from "../../quiz/page"

const HomePage = () => {

    return (
        <div className="">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_10fr_1fr]">
                {/* Empty div for spacing on larger screens */}
                <div className=""></div>
                
                {/* Main content area */}
                <div className="">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-bold underline">Routing in Next.js</h1>
                    </div>
                    <div className="text-pretty text-justify mt-10 font-serif text-lg px-4 md:px-0">
                    <p>Styling in Next.js using Tailwind CSS involves integrating the utility-first CSS framework 
                        to design responsive and modern web interfaces efficiently. Tailwind&apos;s approach focuses on using utility 
                        classes directly in HTML or JSX, allowing for rapid prototyping and design without writing custom CSS. 
                        To integrate Tailwind with Next.js, you install Tailwind via npm, configure it in the tailwind.config.js 
                        file, and include its base, components, and utilities styles in your global CSS. This setup enables 
                        developers to access a wide range of pre-defined classes that control layout, typography, colors, and 
                        other CSS properties. The combination of Next.js and Tailwind enhances developer productivity and offers 
                        a streamlined way to build visually compelling and high-performance web applications.</p>
                    </div>
                    <div className="flex justify-start mt-5 px-4 md:px-0">
                        <h1 className="text-xl font-bold font-mono">Watch this Video Series</h1>
                    </div>
                    <div className="w-full h-auto px-4 md:px-10">
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
                </div>
    
                {/* Empty div for spacing on larger screens */}
                <div className=""></div>
            </div>
        </div>
    );
    
};

export default HomePage;

