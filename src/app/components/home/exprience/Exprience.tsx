"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiClock, FiCode, FiTrendingUp } from "react-icons/fi";
import { ChevronRight } from 'lucide-react';
import { experienceData } from "@/app/constants/expritence";

const  ExperienceSection=()=> {
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


  return (
    <section className="py-20 px-6 md:px-16 bg-gray-100 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="mx-auto max-w-5xl"> 
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 dark:text-orange-400 mb-3">
            {experienceData.title}
          </h2>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-400"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            {experienceData.subtitle}
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-[2px] bg-gradient-to-b from-orange-400 to-blue-400 ml-[-1px]" />
          <div className="grid gap-12">
            {experienceData.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div
                  variants={cardVariants}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-900">
                      <FiBriefcase className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {item.role}
                      </h3>
                      <p className="text-orange-500 text-sm">{item.company}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <FiClock className="h-5 w-5 text-blue-400" />
                      <span>{item.duration}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {item.contributions.map((contribution, i) => (
                        <motion.li key={i} variants={staggerItems} custom={i}>
                          {contribution}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
                >
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-1 text-gray-900 dark:text-gray-100">
                    <FiCode className="text-blue-500" />
                    Technologies Engaged
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                  {(experienceData.timeline[0].technologies).map((tech) => {
                      return (
                        <motion.div
                          key={tech}
                          className="flex items-center gap-2 p-2 rounded-md bg-gray-50 dark:bg-gray-700 text-sm"
                          whileHover={{ scale: 1.03 }}
                        >
                          {<ChevronRight className="h-4 w-4 text-orange-500" /> }
                          <span>{tech}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative z-10 flex justify-center"
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg max-w-md w-full">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-1 text-gray-900 dark:text-gray-100">
                  <FiTrendingUp className="text-orange-500" />
                  Skill Growth
                </h3>
                <div className="space-y-4">
                  {experienceData.growthMetrics.map((metric) => (
                    <div key={metric.label} className="space-y-1">
                      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>{metric.label}</span>
                        <span>{metric.value}%</span>
                      </div>
                      <motion.div
                        className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                        variants={progressBarVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            {experienceData.ctaText}
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-blue-700 text-white text-lg font-semibold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {experienceData.ctaButton}
          </motion.a>
        </motion.div>
      </div>
      <div className="w-[70%] mx-auto h-px bg-gradient-to-r from-transparent bg-orange-600 to-transparent mt-[5%]" />
    </section>
  );
}

export default ExperienceSection