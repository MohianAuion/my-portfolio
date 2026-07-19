import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { portfolio } from "../../data/portfolio";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex items-center pt-24 mt-10 lg:mt-0"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Background Circle */}

            <div className="absolute inset-0 w-84 h-84 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-indigo-100 -z-10 m-auto"></div>

            {/* Hero Image */}

            <img
              src={hero}
              alt="Mohian Ahmed Auion"
              className="w-80 h-80 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-[#287c71] shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Text */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-[#0d0e0d] font-extralight mb-6">
            👋 Hi, I'm
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
            Mohian Ahmed Auion
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#287c71] font-semibold mt-4">
            MERN Stack Developer{" "}
            <span className="text-slate-900 text-base sm:text-lg lg:text-2xl">
              (Learning Phase)
            </span>
          </h2>

          <p className="text-slate-600 mt-6 max-w-xl mx-auto lg:mx-0 leading-8">
         I build modern, responsive, and user-friendly web applications using React and I'm currently expanding my skills in the MERN stack by learning backend development with Node.js, Express.js, and MongoDB. I enjoy solving real-world problems, writing clean code, and continuously improving my skills through hands-on projects.
          </p>

          {/* Buttons */}

          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-10 flex-wrap">
            {/* View Projects */}

            <Link
  to="projects"
  smooth={true}
  duration={600}
  offset={-80}
 className="cursor-pointer bg-[#287c71] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:bg-[#01333f] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-medium"
>
  View My Work
  <FaArrowRight />
</Link>

            {/* Contact */}

            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 rounded-xl border border-slate-300 hover:bg-[#f14236] hover:text-white active:bg-[#f14236] active:text-white transition duration-300 text-sm sm:text-base font-medium"
            >
              <FaPhoneAlt className="mr-2" />
              Contact Me
            </Link>
          </div>

          {/* Social */}

          <div className="w-full flex flex-wrap items-center justify-start lg:justify-start gap-5 mt-10 pb-5">
            <span className="text-slate-500 font-medium">Find me on</span>

            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl lg:text-2xl text-black hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl lg:text-2xl text-[#0A66C2] hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href={portfolio.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl lg:text-2xl text-[#1877F2] hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href={portfolio.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl lg:text-2xl text-[#25D366] hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
