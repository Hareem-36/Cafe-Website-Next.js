// components/WhyChooseUs.js
import { FaUtensils, FaMugHot, FaConciergeBell, FaRunning } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className="py-16 text-center bg-stone-50">
      <h2 className="text-4xl font-bold text-pink-900 mb-10 underline" >WHY CHOOSE US</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto px-4">
        
        {/* Best Quality Food */}
        <div className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaUtensils className="text-5xl text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Best Quality Food</h3>
          <p className="text-gray-600">
            Savor the essence of authenticity and unparalleled quality in every bite.
          </p>
        </div>
        
        {/* Tea Experts */}
        <div className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaMugHot className="text-5xl text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Tea Experts</h3>
          <p className="text-gray-600">
            Elevate your tea experience with our expertly curated collection, where passion meets perfection in every cup.
          </p>
        </div>
        
        {/* Chef's Specials */}
        <div className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaConciergeBell className="text-5xl text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Chef's Specials</h3>
          <p className="text-gray-600">
            Our Chef’s Specials promise a symphony of taste sensations that will tantalize your palate and leave you craving more.
          </p>
        </div>
        
        {/* Quick Service */}
        <div className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaRunning className="text-5xl text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Quick Service</h3>
          <p className="text-gray-600">
            Experience swift and seamless service that keeps you coming back for more.
          </p>
        </div>
        
      </div>
    </section>
  );
}
