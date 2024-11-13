"use client";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";
import "@/app/globals.css";

// Navbar component
const Navbar = () => (
  <nav className="w-full h-16 bg-white shadow-md flex items-center px-6 fixed top-0 left-0 z-10">
    <h1 className="text-xl font-semibold">My Dashboard</h1>
  </nav>
);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Dashboard</title>
        <meta name="description" content="A versatile dashboard for various industries" />
      </head>
      <body className="bg-gray-100 text-gray-800 h-screen overflow-hidden flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area with Navbar and adjusted layout */}
        <div className="flex flex-col flex-1 h-screen ml-64"> {/* Offset for Sidebar width */}
          {/* Navbar */}
          <Navbar />

          {/* Content area below the Navbar */}
          <main className="flex-1 p-6 mt-16 overflow-auto"> {/* Offset for Navbar height */}
            <div className="max-h-full overflow-y-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
