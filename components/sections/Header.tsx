// my-next-app/components/sections/Header.tsx
'use client';  // Add this at the top

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="bg-gray-900 bg-opacity-70 backdrop-blur-lg fixed top-0 left-0 w-full z-50 p-4 transition duration-300"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-red-600 text-2xl font-bold">Mafia Hello Detailers</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#services" className="text-white hover:text-red-600 transition duration-300">Services</a>
                        </li>
                        <li>
                            <a href="#about" className="text-white hover:text-red-600 transition duration-300">About Us</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-red-600 transition duration-300">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;