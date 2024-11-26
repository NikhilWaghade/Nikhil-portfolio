import React, { useState, useEffect } from "react";

function SkillBars() {
  const [skills, setSkills] = useState([
    { name: "JAVASCRIPT", percentage: 0, target: 96 },
    { name: "Python", percentage: 0, target: 75 },
    { name: "HTML/CSS", percentage: 0, target: 98 },
    { name: "REACT JS", percentage: 0, target: 90 },
    { name: "DJANGO", percentage: 0, target: 85 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill) => {
          if (skill.percentage < skill.target) {
            return {
              ...skill,
              percentage: Math.min(skill.percentage + 1, skill.target),
            };
          }
          return skill;
        })
      );
    }, 20); // Increment every 20ms for smooth animation

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container mx-auto p-4 bg-[#212E40] " id="skill">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#84DAFF] ">
        My Skills
      </h1>
      <div className="space-y-6 lg:w-96 lg:ml-[33rem]">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-white">
                {skill.name}
              </span>
              <span className="text-gray-600">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 h-4 rounded-lg">
              <div
                className="bg-blue-900 h-4 rounded-lg transition-all duration-300"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillBars;
