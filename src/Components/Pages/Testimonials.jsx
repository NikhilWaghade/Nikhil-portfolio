import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#212E40] text-white py-16 px-4">
      {/* Testimonials Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-400 mb-12">What our clients say</p>
        <div className="max-w-xl mx-auto">
          <img
            src="https://via.placeholder.com/150" // Replace with your image
            alt="Profile"
            className="rounded-full w-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Kuldeep Kawre</h3>
          <p className="text-gray-400 text-sm mb-4">Client - Founder of Connect Shiksha</p>
          <p className="text-gray-300 mb-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
          </p>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="bg-gray-800 p-8 rounded-lg mt-12 max-w-4xl mx-auto" id="contact">
        <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-700 p-3 rounded-lg w-full text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-700 p-3 rounded-lg w-full text-white"
            />
          </div>
          <textarea
            placeholder="Message"
            className="bg-gray-700 p-3 rounded-lg w-full text-white h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
