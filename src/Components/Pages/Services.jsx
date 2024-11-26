import React from "react";

const Services = () => {
  const services = [
    {
      title: "Front-End Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      icon: "⚛️",
    },
    {
      title: "Back-End Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      icon: "🐍", // Example using Python icon representation
    },
    {
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      icon: "☁️", // AWS or related icon
    },
  ];

  return (
    <div className="bg-[#212E40] text-white py-16" id="services">
      <h2 className="text-center text-4xl font-bold mb-6">Services</h2>
      <p className="text-center text-lg mb-12">What I Offer</p>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full sm:w-72 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl text-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-3">
              {service.title}
            </h3>
            <p className="text-center text-gray-600">{service.description}</p>
            <button className="mt-4 block mx-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
              View More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
