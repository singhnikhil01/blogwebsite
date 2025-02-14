"use client";
import { motion } from "framer-motion";
import {
  FiCode,
  FiCamera,
  FiCoffee,
  FiBook,
  FiMessageCircle,
} from "react-icons/fi";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-24 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="inline-block relative group mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-xl opacity-30" />
          <Image
            src="/images/nikhil.png"
            alt="Nikhil Patel"
            width={192} // 48 * 4 = 192px
            height={192}
            className="relative z-10 object-cover rounded-full border-8 border-white dark:border-gray-800 shadow-xl"
          />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Nikhil Singh
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Full-Stack Developer & Creative Problem Solver with 1+ years of
          experience crafting digital solutions. Passionate about building
          intuitive experiences that marry technical excellence with
          human-centric design.
        </p>
      </section>

      {/* Core Expertise */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
          Technical Arsenal
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Mastery",
              skills: ["React", "TypeScript", "Next.js", "GraphQL"],
              icon: <FiCode className="text-4xl text-amber-600" />,
            },
            {
              title: "Backend Expertise",
              skills: ["Node.js", "PostgreSQL", "AWS", "Docker"],
              icon: <FiCode className="text-4xl text-amber-600" />,
            },
            {
              title: "Design Integration",
              skills: ["Figma", "UX Research", "Prototyping", "Accessibility"],
              icon: <FiCode className="text-4xl text-amber-600" />,
            },
          ].map((area, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-orange-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-orange-900 to-amber-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Development Philosophy</h2>
          <div className="space-y-6">
            <p className="text-lg">
              &quot;I believe technology should empower, not complicate. Every
              line of code I write is guided by three principles:&quot;
            </p>
            <ul className="space-y-4 pl-6">
              <li className="relative before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:bg-amber-300 before:rounded-full">
                <strong>Clarity over Cleverness:</strong> Maintainable code
                beats fancy shortcuts
              </li>
              <li className="relative before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:bg-amber-300 before:rounded-full">
                <strong>User-Centric Execution:</strong> Technology should serve
                people, not the reverse
              </li>
              <li className="relative before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:bg-amber-300 before:rounded-full">
                <strong>Ethical Innovation:</strong> Build solutions that make
                the web better for everyone
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Balanced Lifestyle */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
          Beyond the Keyboard
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FiCamera className="text-amber-600" /> Creative Pursuits
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Weekend street photographer capturing urban narratives.
                Currently exploring:
              </p>
              <ul className="mt-4 space-y-2 pl-6">
                <li>• Film photography with vintage cameras</li>
                <li>• Documentary-style visual storytelling</li>
                <li>• Architectural symmetry exploration</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FiBook className="text-amber-600" /> Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently diving into:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-sm rounded-full">
                  Rust Programming
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-sm rounded-full">
                  Generative AI Ethics
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-sm rounded-full">
                  Sustainable Tech Practices
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <FiCoffee className="text-amber-600" /> Fueling Creativity
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">☕</div>
                <div>
                  <p className="font-semibold">Coffee Connoisseur</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Specialty pour-over enthusiast with a growing collection of
                    single-origin beans
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl">🎧</div>
                <div>
                  <p className="font-semibold">Music Curator</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Creating coding playlists that blend synthwave with
                    classical piano
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl">🌱</div>
                <div>
                  <p className="font-semibold">Urban Gardener</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Growing herbs and battling aphids in my apartment balcony
                    jungle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Let's Build Something
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              {" "}
              Meaningful
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Whether you have a project in mind or want to discuss ethical tech
            practices
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-orange-600 text-white rounded-xl shadow-lg hover:bg-orange-700 transition-all flex items-center gap-2 mx-auto"
          >
            <FiMessageCircle /> Start Conversation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
