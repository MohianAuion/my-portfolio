import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaFilePdf } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-40 lg:w-60"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                to={menu.to}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                activeClass="active"
                className="cursor-pointer text-slate-700 font-medium hover:text-[#287c71] transition-all duration-300"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Resume Button (Always Visible) */}
          <a
            href="/resume/Mohian_Ahmed_Auion_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#287c71] hover:bg-[#01333f] text-white px-3 sm:px-4 md:px-5 py-2 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            <FaFilePdf />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-slate-800"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col p-4 gap-2">

              {menus.map((menu) => (
                <li key={menu.name}>
                  <Link
                    to={menu.to}
                    smooth={true}
                    spy={true}
                    offset={-80}
                    duration={500}
                    activeClass="mobile-active"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center py-3 rounded-xl text-lg font-medium text-slate-700 hover:bg-slate-100 transition-all duration-300"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;