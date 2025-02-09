"use client";

import { motion } from "framer-motion";
import { FiCoffee, FiCode, FiSunrise, FiUsers, FiZap } from "react-icons/fi";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900">
      
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Hey there, <span className="text-orange-500">I&apos;m Nikhil</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Full-stack developer & AI enthusiast, crafting solutions with code.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 8 }}
            className="h-1 bg-orange-500 mx-auto w-48 mt-4"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=""
        >
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
              <FiCoffee className="h-10 w-10 text-orange-500 mb-4" />
              <p className="text-lg text-gray-700 dark:text-gray-300">
                🔮 By day: Full-stack wizard
                <br />
                🌙 By night: AI enthusiast
                <br />
                🌍 24/7: Tech optimist believing we can code a better world
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                <FiSunrise className="mr-2" /> What Drives Me
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  ⚡ Solving real-world problems with clean, efficient code
                </li>
                <li>🌍 Making technology accessible to all</li>
                <li>
                  🎨 Merging creativity with logic for impactful solutions
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
           
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
              <FiCode className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                My Coding Philosophy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                &quot;Write it clean, test it hard, deploy it proud. Code should
                be intuitive and scalable.&quot;
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-500 flex items-center">
                <FiZap className="mr-2" /> What Excites Me Now
              </h2>
              <div className="mt-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md flex items-start gap-4">
                <FiUsers className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    Mentoring & Community
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Helping new devs through mentorship & open-source
                    contributions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Outside coding? ☕ Coffee lover | 📖 Tech reader | 📚 Book Reading
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
          >
            Let&apos;s Chat Tech & Coffee →
          </a>
        </div>
      </div>
    </section>
  );
}
