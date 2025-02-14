import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiStar, FiCode, FiLayout, FiGithub } from "react-icons/fi";

interface Project {
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

interface Props {
  projects: Project[];
  setSelectedProject: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ projects, setSelectedProject }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-6 h-full inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-600">
                {project.type.includes("ML") ? (
                  <FiStar className="text-xl" />
                ) : (
                  <FiCode className="text-xl" />
                )}
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>

            {project.highlights && (
              <ul className="space-y-3 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white"
              >
                <FiLayout className="text-lg" />
              Demo
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-all"
                >
                  <FiGithub className="text-lg" />
                  Source
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;