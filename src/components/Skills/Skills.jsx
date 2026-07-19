import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sectionVariants = {
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= Heading ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#287c71]">
            My Skills
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            These are the technologies and tools I use to build modern,
            responsive and full-stack web applications.
          </p>
        </motion.div>

        {/* ================= Categories ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 space-y-10 sm:space-y-12"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={sectionVariants}
              className="w-full"
            >
              {/* ---------- Category Heading ---------- */}
              <div className="mb-6 flex items-center gap-3">
                <h3 className="shrink-0 text-xl font-bold text-slate-900 sm:text-2xl">
                  {category.category}
                </h3>

                {/* Horizontal Line */}
                <div className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-[#2b8b7d]/70 to-[#2b8b7d]/10"></div>

              </div>

              {/* ---------- Skill Cards ---------- */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
                {category.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="group min-w-0 overflow-hidden rounded-2xl border border-slate-300 bg-white p-4 shadow-md transition-all duration-300 hover:border-[#287c71]/20 hover:shadow-xl sm:p-5"
                    >
                      <div className="flex flex-col items-center justify-center gap-4 text-center">
                        {/* Icon */}
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
                          style={{
                            boxShadow: `0 12px 30px ${skill.color}20`,
                          }}
                        >
                          <Icon
                            size={30}
                            style={{
                              color: skill.color,
                            }}
                            className="transition-transform duration-300 group-hover:rotate-6"
                          />
                        </div>

                        {/* Skill Name */}
                        <h4 className="min-w-0 break-words text-center text-sm font-semibold leading-6 text-slate-800 sm:text-base">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;