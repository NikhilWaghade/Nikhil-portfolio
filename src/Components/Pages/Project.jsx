import React, { useState } from "react";

const Project = () => {
  const [activeTab, setActiveTab] = useState("JavaScript");

//   this is javscript project 
const projects = [
    {
      id: 1,
      title: "Project 01",
      img: "https://media.istockphoto.com/id/2151651895/photo/a-plant-with-leaves-on-a-branch-of-jasmine-flower-tree-a-plant-with-green-leaves-on-a.webp?b=1&s=612x612&w=0&k=20&c=IuwHmNXBFmRlPlEhzgQ1FeHORcEYdQbt0my5IaoGeCs=",
      link: "/",
    },
    {
      id: 2,
      title: "Project 02",
      img: "https://media.istockphoto.com/id/1173544039/photo/colorful-forest.jpg?s=2048x2048&w=is&k=20&c=cT1uDd4BRtmduaiykgIvePvZe8xOBbwnxhZdg5hn8vo=",
      link: "/",
    },
    {
      id: 3,
      title: "Project 03",
      img: "https://media.istockphoto.com/id/2153242960/photo/fire-png-burning-flame-isolated-on-a-black-background.webp?b=1&s=612x612&w=0&k=20&c=fDSKAfivWQKvaDouCfNTBg-bzHcW9CAhHGPzHdiajBE=",
      link: "/",
    },
   
  ];

  // react js projects
  const reactprojects = [
    {
      id: 1,
      title: "Project 01",
      img: "https://media.istockphoto.com/id/1582831634/es/foto/vista-del-plano-desde-el-cielo-desde-la-ventana.webp?b=1&s=612x612&w=0&k=20&c=3guEQPmhCrVzySbpkRwj-jpoYa-Z2HjWIflnZRYP0eQ=",
      link: "/",
    },
    {
      id: 2,
      title: "Project 02",
      img: "https://media.istockphoto.com/id/1202043254/photo/winner-concept-black-and-white-mountain-bike-in-chrome-robotic-claw-3d-rendering.webp?b=1&s=612x612&w=0&k=20&c=0ewzNU8-FH9sFqi0BVypiOuwtP75gVHMU0ukR4GgE4w=",
      link: "/",
    },
    {
      id: 3,
      title: "Project 03",
      img: "https://media.istockphoto.com/id/1253686056/es/vector/educaci%C3%B3n-estudiante-en-l%C3%ADnea-estudiante-estudiante-viendo-clase-virtual-en-la-computadora.webp?b=1&s=612x612&w=0&k=20&c=gchapUMjgYJkpbK2dnIRpl35OfWGqI2_jkcVUZ5Dzc8=",
      link: "/",
    },
    
  ];


  const renderContent = () => {
    switch (activeTab) {
      case "JavaScript":
        return (
            <div className="flex flex-wrap justify-center items-center gap-8 p-6 bg-[#212E40]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[350px] bg-cover relative w-80"
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
      
                {/* Hover Overlay */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {project.title}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.link}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "ReactJS":
        return (
            <div className="flex flex-wrap justify-center items-center gap-8 p-6 bg-[#212E40]">
            {reactprojects.map((reactpro) => (
              <div
                key={reactpro.id}
                className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[350px] bg-cover relative w-80"
              >
                {/* Image */}
                <img
                  src={reactpro.img}
                  alt={reactpro.title}
                  className="w-full h-full object-cover"
                />
      
                {/* Hover Overlay */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {reactpro.title}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={reactpro.link}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
     
        case "Python":
        return (
            <div className="flex flex-wrap justify-center items-center gap-8 p-6 bg-[#212E40]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[350px] bg-cover relative w-80"
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
      
                {/* Hover Overlay */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {project.title}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.link}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "Java":
        return (
         <div className="flex flex-wrap justify-center items-center gap-8 p-6 bg-[#212E40]">
            {reactprojects.map((reactpro) => (
              <div
                key={reactpro.id}
                className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[350px] bg-cover relative w-80"
              >
                {/* Image */}
                <img
                  src={reactpro.img}
                  alt={reactpro.title}
                  className="w-full h-full object-cover"
                />
      
                {/* Hover Overlay */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {reactpro.title}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={reactpro.link}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-[#212E40]" id="Project">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#84DAFF] ">Projects</h1>
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {["JavaScript", "ReactJS", "Python", "Java"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4  rounded shadow">{renderContent()}</div>
    </div>
  );
};

export default Project;
