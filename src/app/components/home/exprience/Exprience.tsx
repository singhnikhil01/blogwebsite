"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiClock, FiCode, FiStar, FiTrendingUp } from "react-icons/fi";

export default function ExperienceSection() {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.2 }
    })
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <motion.span 
              className="text-orange-500"
              animate={{ textShadow: ["0 0 10px rgba(255,165,0,0.3)", "0 0 20px rgba(255,165,0,0.5)", "0 0 10px rgba(255,165,0,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Launching
            </motion.span>{" "}
            <span className="text-blue-600 dark:text-blue-400">My Journey</span>
          </h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            First internship, endless learning
          </motion.p>
        </motion.div>

        {/* Animated Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-blue-500"
          />

          <div className="grid gap-16">
            {/* Internship Timeline Item */}
            <motion.div 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="relative z-10 grid grid-cols-2 gap-8"
            >
              {/* Left Side */}
              <motion.div variants={cardVariants} className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border-2 border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="p-4 bg-orange-100 dark:bg-orange-900 rounded-xl"
                    whileHover={{ rotate: 15 }}
                  >
                    <FiBriefcase className="h-8 w-8 text-orange-500" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Software Engineering Intern
                    </h3>
                    <p className="text-orange-500">Tech Innovators Inc</p>
                  </div>
                </div>

                <motion.div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-400"
                    variants={staggerItems}
                    custom={0}
                  >
                    <FiClock className="h-6 w-6 text-blue-500" />
                    <span>June 2024 - Present</span>
                  </motion.div>

                  <motion.div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                      <FiTrendingUp className="text-green-500" />
                      Key Contributions
                    </h4>
                    <ul className="space-y-3 pl-6">
                      {[
                        "Developed core features for customer-facing web app",
                        "Collaborated on CI/CD pipeline improvements",
                        "Implemented automated testing for key modules"
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-orange-500 before:rounded-full"
                          variants={staggerItems}
                          custom={i}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Side - Tech Stack */}
              <motion.div 
                variants={cardVariants}
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border-2 border-blue-500/20"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiCode className="text-blue-500 animate-bounce" />
                  Technologies Engaged
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Node.js', 'AWS', 'Docker', 'Jest', 'Git'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      className="flex items-center gap-2 p-3 rounded-lg bg-orange-50 dark:bg-gray-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-orange-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Growth Metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative z-10 flex justify-center"
            >
              <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border-2 border-orange-500/20 max-w-xl w-full">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiTrendingUp className="text-orange-500" />
                  Growth Snapshot
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Code Quality", value: 80, color: "bg-orange-500" },
                    { label: "Team Collab", value: 75, color: "bg-blue-500" },
                    { label: "Problem Solving", value: 90, color: "bg-orange-500" }
                  ].map((metric, i) => (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                        <span className="text-gray-700 dark:text-gray-300">{metric.value}%</span>
                      </div>
                      <motion.div 
                        className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <div 
                          className={`h-full ${metric.color} rounded-full`} 
                          style={{ width: `${metric.value}%` }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Excited to bring this learning momentum to new challenges
          </motion.p>
          <motion.a 
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Build the Future Together →</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 opacity-0"
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 -z-10 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-orange-500"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 0.5, 1]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}