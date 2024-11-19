"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import img1 from "../images/loadcoffee.gif";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
            {/* Top bar with hours and contact info */}
            <div className="flex justify-end p-2 bg-gray-800 text-white text-sm">
                <ul className="flex space-x-8">
                    <li>Mon-Fri: 9am to 11pm</li>
                    <li>Sat-Sun: 9am to 12pm</li>
                    <li>Phone No: +1 (092) 000-0000</li>
                </ul>
            </div>

            {/* Main navigation */}
            <nav className="flex justify-between items-center py-8 px-6 bg-orange-900">
                <div className="w-50 flex items-center space-x-2">
                    
                    <p className="text-xl font-bold text-white">Hareem's Café Corner</p>
                    <Image src={img1} alt="Café Logo" width={70} height={70} />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-white text-lg">
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link href="/menus">Our Menu</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>

                {/* Hamburger icon for mobile */}
                <div className="md:hidden">
                    {isMobileMenuOpen ? (
                        <FaTimes className="text-2xl text-white" onClick={toggleMobileMenu} />
                    ) : (
                        <FaBars className="text-2xl text-white" onClick={toggleMobileMenu} />
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden">
                    <ul className="flex flex-col space-y-4 p-4 bg-orange-800 text-white text-lg">
                        <li><a href="/home" onClick={toggleMobileMenu}>Home</a></li>
                        <li><a href="/about-us" onClick={toggleMobileMenu}>About Us</a></li>
                        <li><a href="/menus" onClick={toggleMobileMenu}>Our Menu</a></li>
                        <li><a href="/services" onClick={toggleMobileMenu}>Services</a></li>
                        <li><a href="/contact-us" onClick={toggleMobileMenu}>Contact Us</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
