import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white  py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        {/* About Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4 underline ">About Us</h3>
          <p className="text-sm">
          Enjoy our seasonal menu and experience the tastes of our traditional chai,coffee,paratha and snacks.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4 underline ">Quick Links</h3>
          <ul className="space-y-2">
          <li>
    <a href="/about-us" className="hover:text-gray-400">About Us</a>
  </li>
  <li>
    <a href="/contact-us" className="hover:text-gray-400">Contact Us</a>
  </li>
  <li>
    <a href="/menus" className="hover:text-gray-400">Our Menu</a>
  </li>
  <li>
    <a href="/services" className="hover:text-gray-400">Services</a>
  </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline">Contact Us</h3>
          <p className="text-sm">Phone: +1 (092) 000-0000</p>
          <p className="text-sm">Email: hareem'scafe@email.com</p>
          <p className="text-sm">Address: 123 Main St, Karachi, Pakistan</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4 underline">Follow Us</h3>
          <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/hareem-jaweid-4ab2102bb/"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-gray-200 font-bold"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/wuEzeX2f8oR9pjrS/"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-gray-200 font-bold"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/hareem_jaweid"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-gray-200 font-bold"
              >
                Twitter
              </a>
            </div>
        </div>
      </div>

      <div className="text-center border-t border-white mt-8 pt-4 text-sm">
        © 2024 Hareem Jaweid. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
