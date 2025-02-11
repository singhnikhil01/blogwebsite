"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiClock, FiCode, FiTrendingUp } from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaJsSquare, FaGitAlt } from 'react-icons/fa'; // Importing Font Awesome icons

export default function ExperienceSection() {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.7 } // Reduced bounce and duration
    }
  };

  const staggerItems = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" } // Reduced delay and added easeOut
    })
  };

  const progressBarVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const techIconMap = {
    'React': FaReact,
    'Node.js': FaNodeJs,
    'AWS': FaAws,
    'Docker': FaDocker,
    'Jest': FaJsSquare,
    'Git': FaGitAlt,
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-100 bg-gradient-to-br from-gray-900 to-black text-white transition-colors duration-300">
      <div className="mx-auto max-w-5xl"> 
        <motion.div
          initial={{ opacity: 0, y: -30 }} // Slight upward movement
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Faster, smoother transition
          className="text-center mb-14" // Reduced margin
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 dark:text-orange-400 mb-3">
            My Career Path
          </h2>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-400"
            animate={{ scale: [1, 1.03, 1] }} // Reduced scale
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} // Smoother repeat
          >
            From intern to innovator – a journey of growth and learning.
          </motion.p>
        </motion.div>

        {/* Animated Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-full w-[2px] bg-gradient-to-b from-orange-400 to-blue-400 dark:from-orange-500 dark:to-blue-500 ml-[-1px]" /> {/* Thinner line */}

          <div className="grid gap-12"> {/* Reduced gap */}
            {/* Internship Timeline Item */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }} // Reduced amount
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left Side */}
              <motion.div
                variants={cardVariants}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4"> {/* Reduced gap */}
                  <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-900">
                    <FiBriefcase className="h-6 w-6 text-orange-500" /> {/* Smaller icons */}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      Software Engineering Intern
                    </h3>
                    <p className="text-orange-500 text-sm">Tech Innovators Inc</p> {/* Smaller text */}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm"> {/* Reduced gap, smaller text */}
                    <FiClock className="h-5 w-5 text-blue-400" />
                    <span>June 2024 - Present</span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1"> {/* Reduced sizes */}
                      <FiTrendingUp className="text-green-500 h-4 w-4" />
                      Key Contributions
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {[
                        "Developed core features for customer-facing web app",
                        "Collaborated on CI/CD pipeline improvements",
                        "Implemented automated testing for key modules"
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          variants={staggerItems}
                          custom={i}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Tech Stack */}
              <motion.div
                variants={cardVariants}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-medium mb-4 flex items-center gap-1 text-gray-900 dark:text-gray-100"> {/* Reduced sizes */}
                  <FiCode className="text-blue-500" />
                  Technologies Engaged
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['React', 'Node.js', 'AWS', 'Docker', 'Jest', 'Git'].map((tech) => {
                    const TechIcon = techIconMap[tech as keyof typeof techIconMap] ?? FiCode;

 
                    return (
                      <motion.div
                        key={tech}
                        className="flex items-center gap-2 p-2 rounded-md bg-gray-50 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300" // Reduced sizes
                        whileHover={{ scale: 1.03 }}
                      >
                        <TechIcon className="h-4 w-4 text-orange-500" /> {/* Added icons */}
                        <span>{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Growth Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative z-10 flex justify-center"
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md w-full"> {/* Reduced padding, max-w */}
                <h3 className="text-lg font-medium mb-4 flex items-center gap-1 text-gray-900 dark:text-gray-100"> {/* Reduced sizes */}
                  <FiTrendingUp className="text-orange-500" />
                  Skill Growth
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Code Quality", value: 80, color: "bg-orange-500" },
                    { label: "Team Collaboration", value: 75, color: "bg-blue-500" },
                    { label: "Problem Solving", value: 90, color: "bg-orange-500" }
                  ].map((metric, i) => (
                    <div key={metric.label} className="space-y-1">
                      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400"> {/* Smaller text */}
                        <span>{metric.label}</span>
                        <span>{metric.value}%</span>
                      </div>
                      <motion.div
                        className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" // Thinner progress bar
                        variants={progressBarVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <motion.div
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Faster transition
          className="text-center mt-12" // Reduced margin
        >
          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 mb-4" // Reduced margin
            animate={{ scale: [1, 1.02, 1] }} // Reduced scale
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} // Smoother animation
          >
            Ready to leverage my skills for impactful projects!
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-blue-700 text-white hover:shadow-md transition-all text-lg font-semibold" // Reduced padding, added transitions
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Let&apos;s Connect & Create <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L6.22 12h10.56l-1.01 1.71a.75.75 0 01-1.04.04l.9-1.5H7.42l.98 1.66a.75.75 0 01-.03 1.06zM6.89 9.78a.75.75 0 01.06-1.06l1.61-2.73a.75.75 0 011.1.08l-1.54 2.62H15.5a.75.75 0 010 0H8.02l1.44-2.44a.75.75 0 011.07-.08l-1.59 2.7a.75.75 0 01-.05 1.06z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>

        
      </div>
      <div className="w-[70%] mx-auto h-px bg-gradient-to-r from-transparent bg-orange-600 to-transparent mt-[5%]" />
    </section>
  );
}