import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-widest text-[#287c71] font-semibold">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-slate-500 mt-6 max-w-2xl mx-auto leading-8">
            I'm currently learning the MERN Stack and I'm always open to
            internship opportunities, freelance work, and collaborations.
            Feel free to connect with me through any of the platforms below.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-16">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#287c71]">
              Contact Information
            </h3>

            <div className="space-y-8">

              {/* Email */}

              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-[#287c71] text-xl group-hover:bg-[#287c71] group-hover:text-white transition">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-500 break-all">
                    {portfolio.email}
                  </p>
                </div>
              </a>

              {/* Phone */}

              <a
                href={`tel:${portfolio.phone}`}
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-[#287c71] text-xl group-hover:bg-[#287c71] group-hover:text-white transition">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-500">
                    {portfolio.phone}
                  </p>
                </div>
              </a>

              {/* Location */}

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-[#287c71] text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-500">
                    {portfolio.location}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Card */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#287c71]">
              Find Me On
            </h3>

            <div className="space-y-6">

              {/* GitHub */}

              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <FaGithub className="text-3xl text-black group-hover:scale-110 transition" />
                <span className="font-medium">GitHub</span>
              </a>

              {/* LinkedIn */}

              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <FaLinkedin className="text-3xl text-[#0A66C2] group-hover:scale-110 transition" />
                <span className="font-medium">LinkedIn</span>
              </a>

              {/* Facebook */}

              <a
                href={portfolio.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <FaFacebook className="text-3xl text-[#1877F2] group-hover:scale-110 transition" />
                <span className="font-medium">Facebook</span>
              </a>

              {/* WhatsApp */}

              <a
               href="https://wa.me/8801779331722?text=Hello%20Mohian!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <FaWhatsapp className="text-3xl text-[#25D366] group-hover:scale-110 transition" />
                <span className="font-medium">WhatsApp</span>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;