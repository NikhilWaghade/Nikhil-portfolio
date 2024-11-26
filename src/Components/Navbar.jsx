import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Hero from './Hero';
import About from './Pages/About';
import Education from './Pages/Education';
import SkillBars from './Pages/Skillbar';
import Project from './Pages/Project';
import Services from './Pages/Services';
import Testimonials from './Pages/Testimonials';
import Footer from './Pages/Footer';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className="bg-[#212E40] p-4 flex items-center justify-between">
        {/* Brand/Logo */}
        <h1 className="text-white font-bold text-xl">NW</h1>

        {/* Hamburger Icon */}
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-[#212E40] flex flex-col items-center justify-center gap-6 lg:mr-[34rem] transform ${
            menuOpen ? 'translate-y-14' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:static md:h-auto md:w-auto md:flex md:flex-row md:gap-8 md:translate-x-0`}
        >
          <li className="font-extrabold text-white hover:text-[#84DAFF] " id='Hero'>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="font-extrabold text-white hover:text-[#84DAFF]" >
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li className="font-extrabold text-white hover:text-[#84DAFF]" >
            <a href="#skill" onClick={() => setMenuOpen(false)}>
              Skill
            </a>
          </li>
          <li className="font-extrabold text-white hover:text-[#84DAFF]" >
            <a href="#Project" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li className="font-extrabold text-white hover:text-[#84DAFF]" >
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          {/* <li className="font-extrabold text-white hover:text-[#84DAFF]" id='services'>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li> */}
          <li className="font-extrabold text-white hover:text-[#84DAFF]">
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Hero />
      <About />
      <Education />
      <SkillBars />
      <Project />
      <Services />
      <Testimonials />
      <Footer />
     
    </>
   
  );
};

export default Navbar;
