import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiNetlify, SiMysql } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "ReactJS", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Python", icon: FaPython },
  { name: "SQL", icon: SiMysql },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: VscCode },
  { name: "Netlify", icon: SiNetlify },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-500">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="
              group
              aspect-square
              rounded-2xl
              flex flex-col items-center justify-center
              shadow-xl hover:shadow-2xl
              transition-all duration-300
              cursor-pointer

              bg-white
              dark:bg-gray-800
               hover:shadow-teal-500/50
              hover:bg-teal-500
              dark:hover:bg-teal-500
              transition-all duration-300 ease-out
            hover:-translate-y-2
            "
          >
            <Icon
              className="
                text-6xl mb-4
                transition-all duration-300

                text-gray-900
                dark:text-white

                group-hover:text-black
              "
            />

            <h3
              className="
                text-lg font-semibold
                transition-all duration-300

                text-gray-900
                dark:text-white

                group-hover:text-black
              "
            >
              {name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
