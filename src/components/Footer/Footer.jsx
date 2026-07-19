import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,

} from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Brand */}

          <div className="text-center lg:text-left">

            <h2 className="text-4xl font-bold">
     <h2 className="text-xl lg:text-3xl font-bold">
  <span className="text-white">&lt;/&gt;</span><span className="text-[#287c71]">D</span>eveloper
</h2>
            </h2>

            <p className="mt-4 text-slate-400 max-w-md leading-7">
              Aspiring Full-Stack MERN Developer
            </p>

          </div>

          {/* Social Links */}

          <div className="text-center">

            <h3 className="text-lg lg:text-xl font-semibold mb-6">
              Connect With Me
            </h3>

            <div className="flex justify-center gap-4 flex-wrap">

              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-800 hover:bg-[#287c71] duration-300 flex items-center justify-center text-xl hover:-translate-y-1 transition-all"
              >
                <FaGithub />
              </a>

              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 lg:w-12 lg:h-12  rounded-full bg-slate-800 hover:bg-[#287c71] duration-300 flex items-center justify-center text-xl hover:-translate-y-1 transition-all"
              >
                <FaLinkedin />
              </a>

              <a
                href={portfolio.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 lg:w-12 lg:h-12  rounded-full bg-slate-800 hover:bg-[#287c71] duration-300 flex items-center justify-center text-xl hover:-translate-y-1 transition-all"
              >
                <FaFacebook />
              </a>

              <a
                href="https://wa.me/8801779331722?text=Hello%20Mohian!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 lg:w-12 lg:h-12  rounded-full bg-slate-800 hover:bg-[#287c71] duration-300 flex items-center justify-center text-xl hover:-translate-y-1 transition-all"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <hr className="border-slate-700 my-10" />

        {/* Bottom */}

        <div className="text-center">

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Mohian Ahmed Auion. All Rights Reserved.
          </p>

         </div>

      </div>
    </footer>
  );
};

export default Footer;