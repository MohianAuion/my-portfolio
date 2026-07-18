import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#287c71] font-semibold tracking-widest uppercase">
            My Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#287c71] to-cyan-500">
              Tech Stack
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 mt-6 leading-8">
            I enjoy building modern, scalable and user-friendly web
            applications using the MERN Stack while continuously
            learning new technologies.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="space-y-16">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
            >

              {/* Category */}

              <div className="flex items-center gap-4 mb-8">

                <h3 className="text-2xl font-bold text-slate-800">
                  {category.category}
                </h3>

                <div className="flex-1 h-[2px] rounded-full bg-gradient-to-r from-[#287c71] to-transparent"></div>

              </div>

              {/* Skills */}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {category.items.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: .8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: .3,
                        delay: i * .05,
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                      }}
                      viewport={{ once: true }}
                      className="
                        bg-white
                        rounded-2xl
                        border
                        border-slate-300
                        p-5
                        shadow-sm
                        hover:border-[#287c71]
                        hover:shadow-[0_15px_40px_rgba(40,124,113,.2)]
                        transition-all
                        duration-300
                        cursor-pointer
                        flex
                        items-center
                        gap-4
                      "
                    >

                      {/* Icon */}

                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${skill.color}20`,
                        }}
                      >
                        <Icon
                          size={32}
                          style={{
                            color: skill.color,
                          }}
                        />
                      </div>

                      {/* Text */}

                      <div>

                        <h4 className="font-semibold text-slate-800">
                          {skill.name}
                        </h4>

                        <p className="text-sm text-slate-500">
                          {category.category}
                        </p>

                      </div>

                    </motion.div>
                  );
                })}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;