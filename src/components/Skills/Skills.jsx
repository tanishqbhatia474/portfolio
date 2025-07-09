// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-6 sm:px-10 md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto px-2">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center items-stretch">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 py-6 w-full sm:w-[48%] lg:w-[32%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-5 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
  {category.skills.map((skill) => (
    <div
      key={skill.name}
      className="flex flex-col items-center justify-center gap-1 border border-gray-700 rounded-full px-3 py-2"
    >
      <img
        src={skill.logo}
        alt={`${skill.name} logo`}
        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
      />
      <span className="text-[9px] sm:text-xs text-gray-300 text-center break-words max-w-[70px] leading-tight">
        {skill.name}
      </span>
    </div>
  ))}
</div>



          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
