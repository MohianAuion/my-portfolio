import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,


} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


export const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#444444",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
      },
    ],
  },

  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
    ],
  },

  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "#F24E1E",
      },
      {
      name: "VS Code",
     icon: VscVscode,
      color: "#007ACC",
    

    }

      
    ],
  },
];