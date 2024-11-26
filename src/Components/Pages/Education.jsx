import React from "react";
import { FaGraduationCap } from "react-icons/fa"; // Importing a graduation icon

const Education = () => {
  return (
    <>
    {/* Education & Resume section */}
      <div className="p-6 bg-[#212E40]">
        {/* Resume Section */}
        <h1 className="text-white  inline-block lg:text-[2em] font-bold border-b border-b-[#84DAFF] text-[1.5em] ">RESUME</h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:mt-10">
          {/* Left Section */}
          <div className="left lg:w-1/2 ">
            <h1 className="text-2xl font-bold mb-4 text-center lg:text-left  text-[#84DAFF] lg:ml-64 mt-5">Education</h1>
            <div className="space-y-4 lg:ml-64">
              <div className="box text-white p-4 shadow-md rounded-lg text-left">
                <i className="text-blue-500 text-xl">
                  <FaGraduationCap />
                </i>
                <h2 className="text-lg font-semibold  bg-slate-500 inline-block rounded-lg px-2">2018-19</h2>
                <h2 className="text-md text-gray-300">10th</h2>
                <p className="text-sm text-gray-300">I passed 10th class in 2018-19.</p>
              </div>

              <div className="box text-white p-4 shadow-md rounded-lg text-left">
                <i className="text-blue-500 text-xl">
                  <FaGraduationCap />
                </i>
                <h2 className="text-lg font-semibold  bg-slate-500 rounded-lg inline-block  px-2">2020-21</h2>
                <h2 className="text-md text-gray-300">12th</h2>
                <p className="text-sm text-gray-300">I passed 12th class in 2020-21.</p>
              </div>

              <div className="box text-white p-4 shadow-md rounded-lg text-left">
                <i className="text-blue-500 text-xl">
                  <FaGraduationCap />
                </i>
                <h2 className="text-lg font-semibold bg-slate-500 rounded-lg inline-block px-2">2021-24</h2>
                <h2 className="text-md text-gray-300">Diploma</h2>
                <p className="text-sm text-gray-300">I completed my Diploma in 2021-24.</p>
              </div>

              <div className="box text-white p-4 shadow-md rounded-lg text-left">
                <i className="text-blue-500 text-xl">
                  <FaGraduationCap />
                </i>
                <h2 className="text-lg font-semibold bg-slate-500 rounded-lg inline-block px-2">2024-27</h2>
                <h2 className="text-md text-gray-300">B-Tech</h2>
                <p className="text-sm text-gray-300">I am Passout B-Tech in  2024-27.</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right lg:w-1/2 ">
            <h1 className="text-2xl font-bold mb-4 text-center lg:text-left  text-[#84DAFF]">Knowledges</h1>
            <div className="skill flex flex-wrap gap-4 justify-center   lg:justify-start">
              <h2 className="border-2 border-gray-500 px-4 py-2 text-white  bg-slate-500 rounded-lg">Web Dev.</h2>
              <h2 className="border-2 border-gray-500 bg-slate-500 px-4 py-2 text-white rounded-lg">React.js</h2>
              <h2 className="border-2 border-gray-500 bg-slate-500 px-4 py-2 text-white rounded-lg">Mern Developer</h2>
              <h2 className="border-2 border-gray-500 px-4 py-2 text-white  bg-slate-500 rounded-lg">WordPress.</h2>
            </div>

            <div className="skill flex flex-wrap gap-4 justify-center lg:justify-start lg:mt-5">
              <h2 className="border-2 border-gray-500 px-4 py-2 text-white  bg-slate-500 rounded-lg mt-4">Python(Basic)</h2>
              <h2 className="border-2 border-gray-500 px-4 py-2 text-white  bg-slate-500 rounded-lg mt-4">C(Basic)</h2>
              <h2 className="border-2 border-gray-500 bg-slate-500 px-4 py-2 text-white rounded-lg">C++(Basic)</h2>
              <h2 className="border-2 border-gray-500 bg-slate-500 px-4 py-2 text-white rounded-lg">Java(Basic)</h2>
            </div>
            
            <div className="skill flex flex-wrap gap-4 justify-center   lg:justify-start lg:mt-5">
             
              <h2 className="border-2 border-gray-500 bg-slate-500 px-4 py-2 text-white rounded-lg mt-4">Ms Word</h2>
              <h2 className="border-2 border-gray-500 bg-slate-500 px-4 py-2 text-white rounded-lg mt-4">Ms Excel</h2>
            </div>
            

          </div>
        </div>
      </div>

      {/* working experience section */}
      <div className="p-6 bg-[#212E40]">
        {/* Resume Section */}
        <h1 className="text-white  inline-block lg:text-[2em] font-bold border-b border-b-[#84DAFF] text-[1.5em] ">Experience</h1>
        <div className=" lg:mt-10">
          {/* Left Section */}
          <div className="left lg:w-1/">
            <h1 className="text-2xl font-bold mb-4 text-center lg:text-left  text-[#84DAFF] lg:ml-64 mt-5">Working Experience</h1>
            <div className="space-y-4 lg:ml-64 flex ">
             

              <div className="box text-white p-4 shadow-md rounded-lg text-left mt-4">
                <i className="text-blue-500 text-xl">
                  <FaGraduationCap />
                </i>
                <h2 className="text-lg font-semibold  bg-slate-500 rounded-lg inline-block px-2">2023-24</h2>
                <h2 className="text-md text-gray-300"> <b> COLLEGE - </b>Govt Polytechnic College Balaghat</h2>
                <p className="text-sm text-gray-300"> <b> COURSE - </b> CCNA & NETWORK</p>
              </div>

              <div className="box text-white p-4 shadow-md rounded-lg text-left lg:ml-52 ">
                <i className="text-blue-500 text-xl">
                  <FaGraduationCap />
                </i>
                <h2 className="text-lg font-semibold bg-slate-500 rounded-lg inline-block px-2">2024</h2>
                <h2 className="text-md text-gray-300"> <b> INSTITUTE - </b> Connect Shiksha Coding Class</h2>
                <p className="text-sm text-gray-300"> <b> INTERNSHIP - </b> i Have 1 month Mern Developer Intership Experience.</p>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default Education;
