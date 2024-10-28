"use client";
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const BackHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleBack = () => {
    router.push('/home'); 
  };

  return (
    <>

      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent z-50">
        <button onClick={handleBack} className="text-gray-400 focus:outline-none">
          <FiArrowLeft className="h-7 w-8" />
        </button>
        <button onClick={toggleNav} className="text-gray-500 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

   
      <nav
        className={`fixed top-0 right-0 w-full h-full bg-white text-black transform ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button onClick={toggleNav} className="absolute top-4 right-4 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="flex flex-col items-center justify-start h-full pt-48 space-y-10">
          <li>
            <a href="/home" className="text-2xl font-semibold hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/search" className="text-2xl font-semibold hover:underline">
              Search
            </a>
          </li>
          <li>
            <a href="/schedule" className="text-2xl font-semibold hover:underline">
              My Schedule
            </a>
          </li>
          <li>
            <a href="/" className="text-2xl font-semibold hover:underline">
              Log out
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BackHeader;
