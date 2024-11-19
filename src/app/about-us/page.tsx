// src/app/about/page.tsx
"use client";
import Image from "next/image";
import venueImg from "@/app/images/venue.jpg"; // Adjust the path as needed

const AboutUs = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center p-6 flex items-center justify-center"
      style={{ backgroundImage: `url(${venueImg.src})` }}
    ><br></br>
      <div className="bg-white/80 p-10 rounded-lg shadow-lg backdrop-blur-md max-w-4xl w-full"><br></br><br></br>
      <br></br><h1 className="text-4xl font-bold text-center mb-6 text-orange-900">About Hareem's Treat & Event Cafe</h1>
        
        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-800">Our Mission</h2>
          <p className="text-gray-700 mt-2">
          At Hareem’s Treat & Event Cafe, we believe in creating memorable moments over delicious chai, delectable parathas, flavorful fast food, and unforgettable events. Located in the heart of A.B.C, Karachi, we are your go-to destination for a cozy ambiance, great food, and vibrant gatherings. Step into our world and let us delight your taste buds and dazzle your senses. Our cafe is the ideal setting for a wide range of celebrations, from birthdays and anniversaries to corporate gatherings and beyond. With our warm ambiance, delicious cuisine, and impeccable service, we’ll turn your event into an unforgettable experience for you and your guests.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-800">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li><strong>Quality:</strong> We believe in using the best ingredients for exceptional taste.</li>
            <li><strong>Community:</strong> We’re passionate about connecting people through baking.</li>
            <li><strong>Innovation:</strong> We’re constantly exploring new recipes to bring fresh flavors to our customers.</li>
          </ul>
        </section>
        
      </div>
    </div>
  );
};

export default AboutUs;
