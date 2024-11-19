// pages/index.js
import Image from "next/image";
import img1 from "@/app/images/Home Img/Brown Retro Vintage Cafe and Restaurant Label Logo.png"; 
import img2 from "@/app/images/Home Img/img13.jpg"; 
import img3 from "@/app/images/Home Img/img11.jpg";
import venueImg from "@/app/images/home-bg.jpg"; 
import pa1 from "@/app/images/Home Img/img8.jpg"
import pa2 from "@/app/images/Home Img/img6.jpg"
import pa3 from "@/app/images/Home Img/img14.jpg"
import pa4 from "@/app/images/Home Img/img15.jpg"
import pa5 from "@/app/images/Home Img/img16.jpg"
import pa6 from "@/app/images/Home Img/img18.jpg"

import WhyChooseUs from '../component/WhyChooseUs';
import CustomerReviewSlider from '../component/Slider'

// ------------//
export default function Home1() {
  return (
    
    <div className="container mx-auto p-4">
     
      {/* Introduction Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0">
        <Image 
          src={img1} 
          alt="Introduction" 
          width={300} 
          height={300} 
          className="w-[350px] md:w-[300px] lg:w-[1500px] h-50 md:h-96 lg:h-[300px] rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700" 
        />
        <div className="md:ml-6 bg-stone-100">
          <center><h2 className="text-4xl text-pink-900 font-bold underline mb-2 hover:text-blue-900">Hareem's Treat & Event Cafe</h2></center><br></br>
          <p className="text-amber-900 font-bold">
            At Hareem’s Treat & Event Cafe, we believe in creating memorable moments over delicious chai, delectable parathas, flavorful fast food, and unforgettable events. Located in the heart of A.B.C, Karachi, we are your go-to destination for a cozy ambiance, great food, and vibrant gatherings. Step into our world and let us delight your taste buds and dazzle your senses. Our cafe is the ideal setting for a wide range of celebrations, from birthdays and anniversaries to corporate gatherings and beyond. With our warm ambiance, delicious cuisine, and impeccable service, we’ll turn your event into an unforgettable experience for you and your guests.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {[pa1, pa2, pa3, pa4, pa5, pa6].map((src, index) => (
          <Image key={index} src={src} alt={`Gallery ${index + 1}`} width={600} height={500} className="w-full h-45 object-cover rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300" />
        ))}
      </div>
      <WhyChooseUs/>
      <CustomerReviewSlider/>
      {/* Reservation Form */}
      
      



      <div className="mt-8">
        <center><h2 className="text-4xl  text-orange-900 font-bold underline mb-4 hover:text-orange-900 tracking-in-contract">Reservation Form</h2></center>
        <form className="bg-stone-100 text-white p-4 rounded-lg shadow-md max-w-md mx-auto space-y-4">
          <div>
            <label className="block text-gray-700 font-bold">Name</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Number of People (max 500)</label>
            <input type="number" max="500" className="w-full p-2 border rounded" required />
          </div>
          <b><button type="submit" className="w-full bg-orange-900 text-white py-2 rounded hover:bg-blue-500">
            Reserve Now
          </button></b>
        </form>
      </div>
      {/* Image Section */}
      <div className="relative min-h-screen p-7 flex flex-col bg-stone-50 md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-4">
  {/* Image 1 */}
  <div className="w-full md:w-[900px] h-auto overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
    <Image
      src={img3}
      alt="Image 1"
      width={2000} // increased width
      height={2000} // increased height
      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
    />
  </div>
</div>


      {/* Newsletter Subscription */}
      <div
        className="relative mt-8 text-center bg-cover p-6 rounded-lg shadow-md overflow-hidden "
        style={{
          backgroundImage: `url(${img2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '1.3',
        }}
      >
        {/* Overlay to control the visibility of content over the background image */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Overlay Content */}
        <div className="relative z-20 text-blue-900">
          <h2 className="text-3xl underline font-bold mb-4 hover:text-black">Subscribe to Our Newsletter</h2>
          <form className="space-y-4 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-blue-700 rounded bg-white text-gray-700"
              required
            />
            <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <br></br>
      <section
      className="relative min-h-screen bg-cover bg-center p-6 flex items-center justify-center"
      style={{ backgroundImage: `url(${venueImg.src})` }}
    >
      <div className="pic-area max-w-4xl mx-auto">
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

          <div className="icons mt-8 flex justify-center space-x-4">
            <a href="#!" className="text-fuchsia-800 text-2xl"><i className="fab fa-twitter"></i></a>
            <a href="#!" className="text-fuchsia-800 text-2xl"><i className="fab fa-facebook"></i></a>
            <a href="#!" className="text-fuchsia-800 text-2xl"><i className="fab fa-instagram"></i></a>
            <a href="#!" className="text-fuchsia-800 text-2xl"><i className="fab fa-snapchat-square"></i></a>
          </div>
        </div>

        <div className="mt-8">
        <h3 className="text-center text-4xl font-bold text-white mb-5 bg-orange-900 bg-opacity-50 ">Our Location</h3>
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
    </div>
  );
}
