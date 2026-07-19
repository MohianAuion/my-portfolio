import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";
import { portfolio } from "../../data/portfolio";
import AboutModal from "./AboutModal";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const info = [
    {
      icon: <FaUser />,
      title: "Name",
      value: "Mohian Ahmed Auion",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: portfolio.location,
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: (
        <a
          href={`mailto:${portfolio.email}`}
          className="text-[#287c71] hover:underline break-all"
        >
          {portfolio.email}
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Me",
      value: (
        <a
          href={`tel:${portfolio.phone}`}
          className="text-[#287c71] hover:underline"
        >
          {portfolio.phone}
        </a>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative">

        {/* Blur Overlay */}

        {showModal && (
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 z-20 bg-white/20 backdrop-blur-[2px]"
          />
        )}

        {/* Main Content */}

        <div
          className={`relative z-10 transition-all duration-300 ${
            showModal ? "pointer-events-none select-none" : ""
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-[#287c71] font-semibold uppercase tracking-widest text-sm">
                About Me
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Get to know me!
              </h2>

              <p className="mt-6 text-slate-600 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
                I'm an aspiring MERN Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. My journey began with frontend development using React, and I'm currently expanding my skills by learning backend technologies, including Node.js, Express.js, and MongoDB. I enjoy solving real-world problems through clean, maintainable code and continuously improving my knowledge by building practical projects. My goal is to grow into a skilled full-stack developer who creates efficient, scalable, and impactful web applications.
              </p>

              <button
                onClick={() => setShowModal(true)}
                className="mt-8 w-full sm:w-auto inline-flex justify-center items-center gap-2 px-7 py-4 rounded-xl border border-[#287c71] text-[#287c71] hover:bg-[#01333f] hover:text-white transition duration-300"
              >
                More About Me
                <FaChevronDown />
              </button>
            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 sm:gap-5"
            >
              {info.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition duration-300"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-indigo-100 text-[#287c71] flex items-center justify-center text-lg sm:text-xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-semibold text-base sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-slate-500 break-words">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Modal */}

        <AboutModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />

      </div>
    </section>
  );
};

export default About;