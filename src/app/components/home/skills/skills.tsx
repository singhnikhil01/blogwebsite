"use client";
import { motion } from "framer-motion";
import { SiReact, SiPython, SiDocker, SiAwslambda, SiTensorflow } from "react-icons/si";

const SkillSection = () => {
  const skills = [
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Git", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "GraphQL", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "SQL", category: "database" },
    { name: "AWS", category: "cloud" },
    { name: "Figma", category: "design" },
    { name: "TensorFlow", category: "ai" },
    { name: "PyTorch", category: "ai" },
    { name: "Keras", category: "ai" },
    { name: "NumPy", category: "data" },
    { name: "Pandas", category: "data" },
    { name: "OpenCV", category: "ai" },
    { name: "OpenAI", category: "ai" },
    { name: "PostgreSQL", category: "database" },
    { name: "Redux", category: "frontend" },
    { name: "Jest", category: "testing" },
    { name: "Next.js", category: "framework" },
    { name: "Kubernetes", category: "devops" },
    { name: "Linux", category: "system" },
    { name: "Jenkins", category: "devops" },
    { name: "Ansible", category: "devops" }
  ];

  const categories = [
    {
      name: "Frontend",
      icon: <SiReact className="w-8 h-8" />,
      color: "bg-orange-500",
      skills: skills.filter(s => s.category === "frontend")
    },
    {
      name: "Backend",
      icon: <SiPython className="w-8 h-8" />,
      color: "bg-purple-500",
      skills: skills.filter(s => s.category === "backend")
    },
    {
      name: "DevOps",
      icon: <SiDocker className="w-8 h-8" />,
      color: "bg-blue-500",
      skills: skills.filter(s => s.category === "devops")
    },
    {
      name: "Cloud",
      icon: <SiAwslambda className="w-8 h-8" />,
      color: "bg-green-500",
      skills: skills.filter(s => s.category === "cloud")
    },
    {
      name: "AI/ML",
      icon: <SiTensorflow className="w-8 h-8" />,
      color: "bg-red-500",
      skills: skills.filter(s => s.category === "ai")
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-gradient-radial from-orange-500/20 to-transparent animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-xl">
            Tools & technologies I use to solve complex problems
          </p>
        </motion.div>

        {/* Interactive Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-orange-500 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color} p-3 rounded-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-xl hover:bg-orange-500/10 transition-colors"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-orange-500/30 to-transparent transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Cloud */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.03, type: "spring" }}
              className="px-4 py-2 bg-gray-800 rounded-full hover:bg-orange-500/20 transition-colors cursor-default"
            >
              <span className="text-gray-300 text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-[70%] mx-auto h-px bg-gradient-to-r from-transparent bg-orange-600 to-transparent mt-[2%]" />
    
    </section>
  );
};

export default SkillSection;