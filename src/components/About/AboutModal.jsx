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
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-[#287c71] hover:text-white transition duration-300 flex items-center justify-center"
            >
              <FaTimes />
            </button>

            {/* Heading */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#287c71] mb-10">
              A Little More About Me
            </h2>

            {/* Content */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

              {/* Education */}

              <div>
                <h3 className="flex items-center gap-3 text-xl lg:text-2xl font-semibold">
                  <FaGraduationCap className="text-[#287c71]" />
                  Education
                </h3>

                <p className="mt-4 text-slate-600 leading-7 lg:leading-8 text-sm sm:text-base">
                  I'm currently studying Economics (Honours 3rd Year) while
                  continuously learning the MERN Stack and building practical
                  projects to strengthen my development skills.
                </p>
              </div>

              {/* Journey */}

              <div>
                <h3 className="flex items-center gap-3 text-xl lg:text-2xl font-semibold">
                  <FaLaptopCode className="text-[#287c71]" />
                  My Journey
                </h3>

                <p className="mt-4 text-slate-600 leading-7 lg:leading-8 text-sm sm:text-base">
                  I started with HTML & CSS, then JavaScript and React. Today
                  I'm focused on becoming a professional Full Stack MERN
                  Developer by building real-world applications.
                </p>
              </div>

              {/* Goal */}

              <div>
                <h3 className="flex items-center gap-3 text-xl lg:text-2xl font-semibold">
                  <FaBullseye className="text-[#287c71]" />
                  Career Goal
                </h3>

                <p className="mt-4 text-slate-600 leading-7 lg:leading-8 text-sm sm:text-base">
                  My goal is to work with international clients, contribute to
                  impactful projects and continuously improve my skills while
                  creating beautiful web experiences.
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

            {/* Quote */}

            <div className="mt-10 border-t pt-8">
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