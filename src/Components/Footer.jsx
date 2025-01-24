import React from "react";
import { FaGlobe, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#212E40] text-white py-8 px-4">
      <div className="text-center space-y-6">
        {/* Name */}
        <h2 className="text-2xl font-semibold">Nikhil Waghade</h2>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 text-gray-400">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#Project" className="hover:text-white">
            Projects
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="https://your-website.com"
            className="hover:text-blue-500"
            aria-label="Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-waghade-b866762b9/"
            className="hover:text-blue-700"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/NikhilWaghade"
            className="hover:text-gray-500"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:nikkuwaghade@gmail.com"
            className="hover:text-red-500"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">© Nikhil. All rights reserved.</p>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4">
        <a
          href="#top"
          className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
          aria-label="Back to Top"
        >
          ⬆️
        </a>
      </div>
    </footer>
  );
};

export default Footer;
