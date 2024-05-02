"use client"
import React, { useState } from "react";
import "./globals.css";
import Navbar from "./navbar/page"



const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar/>
          <main className="p-2">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
