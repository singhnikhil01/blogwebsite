"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProjectCard from '../../card/projectcard';
import { FiGithub, FiExternalLink, FiX,  } from 'react-icons/fi';
import { projectsData as projects } from '@/app/constants/education';



type  Project ={
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
}



// Brand colors
const COLORS = {
  primary: '#FF6B35',    // Orange
  secondary: '#004E89',  // Blue
  dark: '#0A0A0A',       // Black
  light: '#F7F7FF'       // White
};

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      className="relative py-20 px-6"
      // style={{ backgroundColor: COLORS.dark, color: COLORS.light }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: COLORS.primary }}
        >
          Engineering Showcase
        </motion.h2>

        <ProjectCard projects={projects} setSelectedProject={(project: Project) => setSelectedProject(project)}/>

        {/* View All Projects Button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/projects"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:gap-3"
            style={{
              backgroundColor: COLORS.secondary,
              color: COLORS.light
            }}
          >
            Explore More Projects
            <FiExternalLink className="text-lg" />
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
              style={{ backgroundColor: COLORS.dark }}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Project Images Carousel */}
                <motion.div 
                  className="relative h-64 rounded-xl overflow-hidden border border-white/10"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Project Overview */}
                <div>
                  <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.primary }}>
                    Project Overview
                  </h4>
                  <p className="text-gray-300">{selectedProject.details && selectedProject.details.overview}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.primary }}>
                    Key Features & Challenges
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.details &&  selectedProject.details.challenges.map((challenge: string, i: number) => (
                      <div 
                        key={i}
                        className="p-4 rounded-lg border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: COLORS.secondary }}
                          />
                          <span className="font-medium">{challenge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.primary }}>
                      System Architecture
                    </h4>
                    <div className="p-4 rounded-lg bg-black/30">
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details && selectedProject.details.architecture.split(' → ').map((component: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{
                              backgroundColor: COLORS.primary + '20',
                              color: COLORS.primary
                            }}
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.primary }}>
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details && selectedProject.details.stack.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm border"
                          style={{
                            borderColor: COLORS.secondary,
                            color: COLORS.secondary
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={selectedProject.demo}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all"
                    style={{
                      backgroundColor: COLORS.primary,
                      color: COLORS.light
                    }}
                  >
                    <FiExternalLink className="text-lg" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all"
                  >
                    <FiGithub className="text-lg" />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;