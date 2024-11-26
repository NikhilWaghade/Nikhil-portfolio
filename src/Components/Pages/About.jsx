import React from 'react';

const About = () => {
  const tableData = [
    { column1: 'Name', column2: ': Nikhil Waghade' },
    { column1: 'Age', column2: ': 21 Years' },
    { column1: 'Nationality', column2: ': India' },
    { column1: 'Phone', column2: ': +91-9302771235' },
    { column1: 'Language', column2: ': Hindi, English' },
    { column1: 'Freelance', column2: ': Available' },
  ];

  return (
    <div className="p-6 bg-[#212E40] flex" id='about'>
      {/* Image and CV Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgD_TIyXoAx2X59SfyejAYxn8eqMvQJ6yNoocePFx82YTfVNXd"
          alt="Profile"
          className=" border-[#84DAFF] border-4 lg:w-72 lg:h-80 lg:mt-8 rounded-xl lg:ml-96 ml-32  "
        />
        <a
          href="https://ik.imagekit.io/61fnzlgtu/Resume-Nikhil(final).pdf?updatedAt=1728466157388"
          className="mt-4 px-8 py-1 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white lg:ml-60 ml-16 lg:px-6 lg:py-3 "
        >
          Download CV
        </a>
      </div>

      {/* About Me Section */}
      <div className="text-center mb-8 lg:mr-[25rem] lg:-mt-1 mt-80 -ml-48">
        <h1 className="text-4xl  mb-4 text-[#84DAFF] lg:ml-56 -ml-28">About Me</h1>
        <p className=" leading-relaxed text-white lg:w-[30rem] lg:ml-[33rem] w-80 text-left ml-10">
          I am a Full Stack Developer with extensive,helpful knowledge and proficiency in JavaScript, Rest frameworks , Restful APIs , React.js , Redux, HTML, CSS, and a strong ability to write clean and efficient code.
        </p>

         {/* Table Section */}
      <div className="overflow-x-auto ml-5  mt-4 lg:ml-32">
        <table className="border-collapse lg:ml-96 text-left lg:mt-4 ">
          
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className=" px-4 py-2 text-white">{row.column1}</td>
                <td className=" px-4 py-2 text-gray-500">{row.column2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

</div>
    
  );
};

export default About;  