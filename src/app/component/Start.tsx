import React from 'react';
import Image from 'next/image';
import img2 from "@/app/images/hero-section-banner.webp";

const MainSection = () => {
    return (
        <main className="main-section h-screen flex items-center justify-center">
            <section className="flex flex-col md:flex-row items-center md:items-start w-full max-w-7xl mx-auto px-4 md:px-8">
                {/* Image on the Left */}
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <Image src={img2} alt="Hero Section Banner" className="rounded-lg" />
                </div>
<br></br>
                {/* Text on the Right */}
                <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8 bg-yellow-700 p-6 rounded-lg">
                    <span className="block text-lg md:text-xl font-semibold tracking-wide text-gray-200 mb-2">
                        NOW YOU CAN FEEL THE ENERGY
                    </span>
                    <h1 className=" text-white text-3xl md:text-5xl font-bold leading-snug mb-6">
                        Start your day with <br /> a black Coffee
                    </h1>
                    <center><button className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                        BUY NOW
                    </button></center>
                </div>
            </section>
        </main>
    );
};

export default MainSection;
