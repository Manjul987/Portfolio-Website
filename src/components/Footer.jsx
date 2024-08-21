import React from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-rgb(232, 177, 99) text-white ">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 mb-4">
                <FaLinkedin size={26} className="hover:text-blue-600" />
                <FaInstagram size={26} className="hover:text-pink-500" />
            </div>
            <p className="text-sm text-center">© 2024 Manjul Joshi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
