import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-16 text-center"
>
  {/* Section Label */}
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#287c71]">
    My Work
  </p>

  {/* Heading */}
  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
    Featured Projects
  </h2>

  {/* Decorative Line */}
  <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-[#287c71]"></div>

  {/* Description */}
  <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
    Here are some of the projects I've built throughout my web development
    learning journey. Each project reflects my growing expertise in creating
    responsive, user-friendly web applications using modern technologies, with
    a strong focus on clean code, performance, and continuous improvement.
  </p>
</motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <div className="flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 group-hover:shadow-2xl">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-slate-600 leading-7 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                 <div className="mt-8 flex gap-3 pt-2">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <button
      className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-3 sm:px-5 py-3 text-sm sm:text-base font-semibold text-white bg-black transition-all duration-300 hover:border-slate-900 hover:bg-slate-800 hover:text-gray-500"
    >
      <FaGithub className="text-base lg:text-lg" />
      <span>GitHub</span>
    </button>
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <button
      className="w-full flex items-center justify-center gap-2 rounded-xl px-3 sm:px-5 py-3 text-sm sm:text-base font-semibold text-black border border-gray-400 transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg"
    >
      <HiOutlineExternalLink className="text-base lg:text-lg" />
      <span>Live Demo</span>
    </button>
  </a>
</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14 lg:mt-16"
        >
          <a
            href="https://github.com/MohianAuion?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="group flex items-center gap-2 rounded-xl px-5 py-3 lg:px-8 lg:py-4 text-sm lg:text-base font-semibold text-[#287c71] border border-[#287c71] transition-all duration-300 hover:-translate-y-1 hover:bg-[#287c71] hover:text-white hover:shadow-xl">
  <span>View More Projects</span>
  <HiArrowRight
    className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1"
  />
</button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;