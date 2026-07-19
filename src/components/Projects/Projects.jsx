import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projects } from "../../data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#287c71]">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-[#287c71]"></div>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            A collection of full-stack applications built using modern web
            technologies. These projects demonstrate my skills in frontend,
            backend, authentication, database management, and responsive UI
            development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-[#3e8b81] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6">
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-[#287c71] transition hover:bg-[#287c71] hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition bg-black text-white hover:border-[#41a396] hover:bg-black hover:text-gray-600"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-stone-300  px-4 py-3 font-semibold transition hover:bg-[#287c71] hover:text-white"
                  >
                    <HiOutlineExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/MohianAuion"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-[#287c71] px-8 py-3 font-semibold text-[#287c71] transition-all duration-300 hover:bg-[#287c71] hover:text-white"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;