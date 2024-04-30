"use client"


import { useState } from 'react';
import Quiz from "../../quiz/page"

const HomePage = () => {
    return (
        <div className="">
            <div className="w-full h-full grid grid-cols-[1fr_7fr_1fr]">
                <div className=""></div>
                <div className="">
                    <div className="flex justify-center items-center">
                        <h1 className=" text-3xl font-bold underline">Managing HTTP Requests in Express</h1>
                    </div>
                    <div className=" text-pretty text-justify mt-10 font-serif text-lg">
                        <p className="">This tutorial series delves into handling different types of HTTP requests in Express 
                        with Thunder Client in Visual Studio Code. Initially, the series introduces the setup and testing of 
                        'GET' route handlers using in-memory data structures for comments. It demonstrates installing necessary 
                        tools, creating data files, and testing routes via Thunder Client. The next videos progressively 
                        cover how to handle 'POST', 'PATCH', and 'DELETE' requests. For 'POST', it discusses creating and 
                        returning new comment objects. The 'PATCH' video focuses on updating a comment's properties and verifying 
                        changes, while the 'DELETE' video shows how to remove a comment from the array and handle client responses 
                        effectively. Each segment includes practical examples and code adjustments, providing a comprehensive 
                        guide to managing API routes in Node.js applications.</p>
                    </div>
                </div>
                <div className=""></div>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-10 mt-10">
                <div>
                    <div className="flex justify-center items-center">
                        <h1 className=" text-2xl font-bold underline">HTTP GET Requests</h1>
                    </div>
                    <div className=" text-justify mt-4">
                        <p>HTTP GET requests are used to retrieve information from a server. They are commonly used in web 
                            browsing and API interactions to request data without affecting the state of the 
                            server. GET requests can include query parameters to specify the data requested.</p>
                    </div>
                    <div>
                        <div className=" w-full h-auto px-10">
                            <div className="mt-8">
                                <iframe 
                                    width="100%" 
                                    height="300"
                                    src="https://www.youtube.com/embed/b3ue9WL5fk8?si=oExHRVcd3AbCXlKK" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <h1 className=" text-2xl font-bold underline">HTTP POST Requests</h1>
                    </div>
                    <div className=" text-justify mt-4">
                        <p>HTTP POST requests are used to submit data to a server. Typically, they create or update resources. 
                            The data sent in a POST request is included in the body of the request, which can be formatted as 
                            JSON, form data, or other types depending on the API's requirements.</p>
                    </div>
                    <div>
                        <div className=" w-full h-auto px-10">
                            <div className="mt-8">
                                <iframe 
                                    width="100%" 
                                    height="300"
                                    src="https://www.youtube.com/embed/pzPS7Fn-8tE?si=Lw8aHqZjdUgzvL85" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center">
                        <h1 className=" text-2xl font-bold underline">HTTP PATCH Requests</h1>
                    </div>
                    <div className=" text-justify mt-4">
                        <p>HTTP PATCH requests are used to make partial updates to resources. Unlike PUT, which replaces the entire 
                            resource, PATCH modifies only specified attributes of a resource, making it ideal for efficiently updating 
                            fields without altering the entire data structure.</p>
                    </div>
                    <div>
                        <div className=" w-full h-auto px-10">
                            <div className="mt-8">
                                <iframe 
                                    width="100%" 
                                    height="300"
                                    src="https://www.youtube.com/embed/bDbBh7lEamE?si=aHaGEnGrJeNLd5Lf" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <h1 className=" text-2xl font-bold underline">HTTP DELETE Requests</h1>
                    </div>
                    <div className=" text-justify mt-4">
                        <p>HTTP DELETE requests are used to remove resources from a server. In web development, these requests target 
                            specific endpoints to delete data, such as removing a user profile or a comment in a database. The server 
                            then responds, often confirming the deletion or noting any errors.</p>
                    </div>
                    <div>
                        <div className=" w-full h-auto px-10">
                            <div className="mt-8">
                                <iframe 
                                    width="100%" 
                                    height="300"
                                    src="https://www.youtube.com/embed/x3KCt1Oc278?si=2nr1cOvICT9mWkLv" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Quiz/>
                </div>
                <div>
                    <Quiz/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

