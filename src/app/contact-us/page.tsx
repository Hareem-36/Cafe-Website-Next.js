import React from 'react';
import venueImg from "@/app/images/home-bg.jpg"; // Correct image import

const Contact = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center p-6 flex items-center justify-center"
      style={{ backgroundImage: `url(${venueImg.src})` }}
    >
      <div className="pic-area max-w-4xl mx-auto"><br></br><br></br>
        <div className="pic-area-text text-center bg-white bg-opacity-70 p-8 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold text-fuchsia-800 font-bold">Methods to</h2>
          <h1 className="home__name text-2xl md:text-4xl font-bold text-gray-800 font-bold">Contact Us</h1>
          <h3 className="text-md md:text-lg text-gray-600 mt-2 font-bold">One email, phone call, or block away.</h3>

          <div className="sections mt-8 grid gap-4 md:grid-cols-3">
            <div className="sections-section p-4 bg-white shadow-md rounded-lg text-center">
              <i className="fas fa-envelope text-fuchsia-800 text-2xl"></i>
              <p className="mt-2 text-sm md:text-base font-bold text-blue-800">Email</p>
              <b><p>hareem'scafe@email.com</p></b>
            </div>
            <div className="sections-section p-4 bg-white shadow-md rounded-lg text-center">
              <i className="fas fa-mobile-alt text-fuchsia-800 text-2xl"></i>
              <p className="mt-2 text-sm md:text-base font-bold text-blue-800">Phone</p>
              <b><p>+1 (092) 000-0000</p></b>
            </div>
            <div className="sections-section p-4 bg-white shadow-md rounded-lg text-center">
              <i className="fas fa-map-marker-alt text-fuchsia-800 text-2xl"></i>
              <p className="mt-2 text-sm md:text-base font-bold text-blue-800">Address</p>
              <b><p>351 Karachi, Pakistan</p></b>
            </div>
          </div>

          
        </div>

        <div className="mt-8">
          <h3 className="text-center text-4xl font-bold text-white mb-5 bg-orange-900  bg-opacity-50 ">Our Location</h3>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1731376792041!5m2!1sen!2s"
  width="100%" height="350"
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg shadow-md"
/>
        </div>
        
      </div>

    </section>
   
  );
};

export default Contact;
