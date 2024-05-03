"use client"


// import Sidebar from '../sidebar/page';
import { useState } from 'react';

const HomePage = () => {
    return (
        <div className="">
            <div className="w-full h-full grid grid-cols-[1fr_4fr_1fr]">
                <div className=""></div>
                <div className="">
                    <div className="flex justify-center items-center">
                        <h1 className=" text-3xl font-bold underline text-center">Why we Learn Next Js</h1>
                    </div>
                    <div className=" text-pretty text-justify mt-10 font-serif text-lg">
                        <p className="">Next.js is a popular framework built on top of Node.js, designed to enhance
                        the capabilities of React applications by providing several key features that address common
                        development and production challenges:</p>
                    </div>

                    <div className=" md:px-10">
                        <div className=" text-pretty text-start mt-7">
                            <h1 className=" font-semibold">Server-Side Rendering (SSR):</h1>
                            <p className=" text-justify text-wrap font-serif">Next.js allows React components to be rendered on the server, improving the initial
                            page load time, which is crucial for SEO and user experience. This is particularly beneficial for 
                            content-heavy applications.</p>
                        </div>
                        <div className=" text-pretty text-start mt-2">
                            <h1 className=" font-semibold">Static Site Generation (SSG):</h1>
                            <p className=" text-justify text-wrap font-serif">It supports pre-rendering pages at build time. This feature is useful for 
                            pages that can be generated once and served statically, without needing to be rendered on each request, thus improving performance.</p>
                        </div>
                        <div className=" text-pretty text-start mt-2">
                            <h1 className=" font-semibold">File-based Routing:</h1>
                            <p className=" text-justify text-wrap font-serif">Next.js uses the file system to route pages automatically, simplifying and speeding 
                            up the development process. Pages are created in the pages directory and are associated with a route based on their file names.</p>
                        </div>
                        <div className=" text-pretty text-start mt-2">
                            <h1 className=" font-semibold">API Routes:</h1>
                            <p className=" text-justify text-wrap font-serif">It allows developers to easily create API endpoints as part of the Next.js application. 
                            This makes it possible to handle backend functionality and frontend in a single project, simplifying deployment and scaling.</p>
                        </div>
                    </div>
                
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default HomePage;

