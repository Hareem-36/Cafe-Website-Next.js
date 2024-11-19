// components/Carousel.js
"use client"
import Image from "next/image";
import par1 from "@/app/images/Home Img/img1.jpg";
import par2 from "@/app/images/Home Img/img2.jpg";
import par3 from "@/app/images/Home Img/img5.jpg";
import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: par1, text: 'Slide 1 Text' },
    { src: par2, text: 'Slide 2 Text' },
    { src: par3, text: 'Slide 3 Text' },
  ];

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % images.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + images.length) % images.length);

  return (
    <div className="relative w-full overflow-hidden h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]"> {/* Responsive height */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-2">
    {/* Welcome message */}
    <div className="bg- py-10 flex flex-col items-center justify-center">
    {/* Overlay for darkening effect */}
    <div className="relative w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center p-8 space-y-2">
        {/* Welcome message */}
        <center><p className="text-white text-5xl md:text-4xl font-extrabold   tracking-wide hover:text-gray-300">
            Welcome At
        </p></center>
<br></br>
        {/* Cafe name */}
       <center> <p className="text-white text-4xl md:text-3xl font-bold italic hover:text-gray-300">
            Hareem's Treat & Event Cafe
        </p></center>
    </div>
</div>

</div>

        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded hover:bg-gray-600">
        ‹
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded hover:bg-gray-600">
        ›
      </button>
    </div>
  );
}
