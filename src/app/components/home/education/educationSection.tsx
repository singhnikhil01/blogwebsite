"use client";
import { motion } from "framer-motion";
import { FiBookOpen,  FiAward } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

const educationData = [
  {
    year: "2017-2019",
    title: "Higher Secondary Education",
    institution: "Delhi Public School, New Delhi",
    icon: <FiBookOpen className="w-8 h-8" />,
    highlights: [
      "Scored 95% in CBSE Board Exams",
      "Head of Science Club",
      "National Level Quiz Competition Winner"
    ]
  },
  {
    year: "2017-2019",
    title: "Higher Secondary Education",
    institution: "Delhi Public School, New Delhi",
    icon: <FiBookOpen className="w-8 h-8" />,
    highlights: [
      "Scored 95% in CBSE Board Exams",
      "Head of Science Club",
      "National Level Quiz Competition Winner"
    ]
  },

  {
    year: "2019-2023",
    title: "Bachelor of Technology (CSE)",
    institution: "Indian Institute of Technology, Delhi",
    icon: <FaUserGraduate  className="w-8 h-8" />,
    highlights: [
      "CGPA: 9.2/10",
      "Specialization in AI & Machine Learning",
      "Published 2 research papers"
    ]
  }
];

export default function EducationSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">Academic</span>{" "}
            <span className="text-blue-600 dark:text-blue-400">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building the foundation for technological innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-blue-500"
          />

          <div className="space-y-20">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              >
                {/* Left Side - Year */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-block p-6 rounded-full bg-gradient-to-br from-orange-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 shadow-lg"
                  >
                    <span className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                      {edu.year}
                    </span>
                  </motion.div>
                </div>

                {/* Center - Timeline Dot */}
                <div className="hidden md:flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 relative z-10">
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping" />
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className={`${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border-2 border-blue-500/20"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-xl">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {edu.title}
                        </h3>
                        <p className="text-blue-500">{edu.institution}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                        <FiAward className="text-orange-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3 pl-6">
                        {edu.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            className="relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-orange-500 before:rounded-full"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                          >
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 text-white hover:shadow-xl transition-all"
          >
            Let&apos;s Build Something Great →
          </a>
        </motion.div>
      </div>
    </section>
  );
}