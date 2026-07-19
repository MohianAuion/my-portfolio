import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBullseye,
  FaTimes,
} from "react-icons/fa";

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center bg-white/20 backdrop-blur-[2px] p-4 sm:p-6 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl px-5 py-8 sm:px-8 sm:py-10 md:p-10 lg:p-12"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 md:top-6 md:right-6 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-slate-100 hover:bg-[#287c71] hover:text-white transition duration-300 flex items-center justify-center"
            >
              <FaTimes />
            </button>

            {/* Heading */}

            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#287c71] pr-10 mb-10">
              The Journey So Far
            </h2>

            {/* Content */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* LEFT COLUMN */}

              <div className="space-y-10">

                {/* Education */}

                <div>
                  <h3 className="flex items-center gap-3 text-xl lg:text-2xl font-semibold">
                    <FaGraduationCap className="text-[#287c71]" />
                    Education
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8 text-sm sm:text-base">
                    I'm currently studying BSS (Honours) in Economics at
                    Dhaka Central University (DCU). Alongside my academic
                    studies, I'm continuously learning the MERN Stack and
                    building practical projects to strengthen my full-stack
                    development skills.
                  </p>
                </div>

                {/* Career Goal */}

                <div>
                  <h3 className="flex items-center gap-3 text-xl lg:text-2xl font-semibold">
                    <FaBullseye className="text-[#287c71]" />
                    Career Goal
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8 text-sm sm:text-base">
                    My goal is to start my career by gaining real-world
                    experience through internships and junior developer
                    opportunities, whether remote or on-site. I'm eager to
                    collaborate with experienced teams, learn industry best
                    practices, and contribute to meaningful projects for
                    clients in both Bangladesh and around the world while
                    continuously growing as a full-stack developer.
                  </p>
                </div>
                                {/* Technologies */}

                <div>
                  <h3 className="flex items-center gap-3 text-xl lg:text-2xl font-semibold">
                    <FaLaptopCode className="text-[#287c71]" />
                    Technologies
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Tailwind CSS",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "Firebase",
                      "Git",
                      "GitHub",
                      "Vercel",
                      "Figma",
                      "VS Code",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-full bg-[#287c71]/10 text-[#287c71] text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN */}

              <div>
                <h3 className="flex items-center gap-3 text-xl lg:text-2xl font-semibold">
                  <FaLaptopCode className="text-[#287c71]" />
                  My Journey
                </h3>

                <p className="mt-4 text-slate-600 leading-8 text-sm sm:text-base">
                  I began my programming journey in late 2025 with the
                  fundamentals of HTML5, CSS3, and Tailwind CSS, where I
                  learned how to build responsive and visually appealing web
                  interfaces.

                  <br /><br />

                  After establishing a strong frontend foundation, I focused
                  on mastering JavaScript and ES6, which helped me understand
                  the core concepts of modern web development.

                  <br /><br />

                  From there, I moved on to React, learning component-based
                  architecture, state management, and Firebase Authentication
                  to build interactive and secure applications.

                  <br /><br />

                  Currently, I'm expanding my backend knowledge by learning
                  Node.js, Express.js, and MongoDB while also exploring
                  TypeScript to write more scalable and maintainable code.

                  <br /><br />

                  My goal is to become a skilled Full-Stack MERN Developer by
                  continuously building real-world projects and improving my
                  problem-solving skills.
                </p>

              </div>

            </div>
                        {/* Quote */}

            <div className="mt-10 border-t border-slate-200 pt-8">
              <p className="text-center italic text-slate-600 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8">
                "I believe learning never stops. Every project teaches me
                something new, and every challenge helps me become a better
                developer."
              </p>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;