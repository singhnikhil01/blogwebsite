"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiX, FiArrowRight } from "react-icons/fi";
import ProjectCard from "../components/card/projectcard";
import { projectsData } from "../constants/education";

const COLORS = {
  primary: "#FF6B35",
  secondary: "#004E89",
  dark: "#0A0A0F",
  light: "#F7F7FF",
};

type Project = {
  id: number;
  title: string;
  type: string;
  image: string;
  highlights?: string[];
  github?: string;
  demo?: string;
  details?: {
    overview: string;
    challenges: string[];
    architecture: string;
    stack: string[];
    images: string[];
  };
};
// type Props = {
//   projectsData:Project[]
// }

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div className="min-h-screen  py-8 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-800 to-orange-200 bg-clip-text text-transparent">
            Innovation Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring the intersection of cutting-edge technology and elegant
            solutions
          </p>
          <div className="max-w-[30%] h-1 mt-2 mx-auto bg-orange-500"></div>
        </motion.div>

        {/* Projects Grid */}
        <ProjectCard
          projects={projectsData}
          setSelectedProject={(project: Project) => setSelectedProject(project)}
        />

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0  bg-black/50 backdrop-blur-xl z-40 flex items-center justify-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="relative w-full pb-2 mt-20 max-w-4xl h-[90vh] z-50 overflow-y-auto scrollbar-hide  rounded-2xl"
                style={{ backgroundColor: COLORS.dark }}
              >
                {/* Modal Header */}
                <div className="p-4 py-5 bg-black z-50  border-b border-white/10 flex justify-between items-center sticky top-0 ">
                  <h3 className="text-lg md:text-2xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/20 rounded-lg"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-4 md:p-6 space-y-6 z-0">
                  {/* Project Image */}
                  <motion.div
                    className="relative h-48 md:h-64 rounded-xl overflow-hidden border border-white/10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={1000}
                      height={0}
                      className="object-cover w-full h-auto"
                    />
                  </motion.div>

                  {/* Overview */}
                  <div>
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ color: COLORS.primary }}
                    >
                      Project Overview
                    </h4>
                    <p className="text-gray-300">
                      {selectedProject.details?.overview}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ color: COLORS.primary }}
                    >
                      Key Features & Challenges
                    </h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      {selectedProject.details?.challenges.map(
                        (challenge, i) => (
                          <li key={i}>{challenge}</li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Technical Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: COLORS.primary }}
                      >
                        System Architecture
                      </h4>
                      <div className="p-3 rounded-lg bg-black/30">
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.details?.architecture
                            .split(" → ")
                            .map((component, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-sm rounded-full"
                                style={{
                                  backgroundColor: COLORS.primary + "20",
                                  color: COLORS.primary,
                                }}
                              >
                                {component}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: COLORS.primary }}
                      >
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details?.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-sm border rounded-full"
                            style={{
                              borderColor: COLORS.secondary,
                              color: COLORS.secondary,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-center"
                        style={{
                          backgroundColor: COLORS.primary,
                          color: COLORS.light,
                        }}
                      >
                        <FiExternalLink className="text-lg" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-all"
                      >
                        <FiGithub className="text-lg" />
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating CTA */}
      <div
        className={`fixed bottom-8 right-8 z-50 ${
          selectedProject ? "hidden" : ""
        }`}
      >
        <motion.a
          href="/contact"
          className="flex items-center gap-2 px-6 py-3 bg-orange-400 text-white rounded-full shadow-lg hover:bg-orange-300 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Let&apos;s Innovate Together
          <FiArrowRight className="text-lg" />
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectsPage;
