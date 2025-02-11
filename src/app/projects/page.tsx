"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiX , FiArrowRight } from 'react-icons/fi';
import ProjectCard from '../components/card/projectcard';


const COLORS = {
  primary: '#FF6B35',
  secondary: '#004E89',
  dark: '#0A0A0F',
  light: '#F7F7FF'
};

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

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Content Moderator',
      type: 'ML Engineering',
      image: '/projects/ai-moderation.jpg',
      highlights: [
        'Real-time image analysis pipeline',
        'Custom CNN architecture',
        'Scalable Kubernetes deployment'
      ],
      github: '#',
      demo: '#',
      details: {
        overview: 'Developed a content moderation system handling 10k+ requests/minute Developed a content moderation system handling 10k+ requests/minute',
        challenges: ['Real-time processing demands', 'Model interpretability needs'],
        architecture: 'TensorFlow → FastAPI → Redis → React',
        stack: ['Python', 'PyTorch', 'Docker', 'AWS'],
        images: [
          '/projects/moderation-1.jpg',
          '/projects/moderation-2.jpg'
        ]
      }
    },
    {
      id: 2,
      title: 'Serverless E-Commerce Platform',
      type: 'Full Stack Development',
      image: '/projects/ecommerce.jpg',
      highlights: [
        'Zero-downtime deployments',
        'JWT-based auth system',
        'Payment gateway integration'
      ],
      github: '#',
      demo: '#',
      details: {
        overview: 'Built cloud-native platform handling $1M+ monthly transactions...',
        challenges: ['State management in serverless', 'Cold start optimization'],
        architecture: 'React → Lambda → DynamoDB → Stripe',
        stack: ['TypeScript', 'Node.js', 'Terraform', 'Redis'],
        images: [
          '/projects/ecommerce-1.jpg',
          '/projects/ecommerce-2.jpg'
        ]
      }
    },
    {
      id: 3,
      title: 'Serverless E-Commerce Platform',
      type: 'Full Stack Development',
      image: '/projects/ecommerce.jpg',
      highlights: [
        'Zero-downtime deployments',
        'JWT-based auth system',
        'Payment gateway integration'
      ],
      github: '#',
      demo: '#',
      details: {
        overview: 'Built cloud-native platform handling $1M+ monthly transactions...',
        challenges: ['State management in serverless', 'Cold start optimization'],
        architecture: 'React → Lambda → DynamoDB → Stripe',
        stack: ['TypeScript', 'Node.js', 'Terraform', 'Redis'],
        images: [
          '/projects/ecommerce-1.jpg',
          '/projects/ecommerce-2.jpg'
        ]
      }
    }
  ];

 


  return (
    <div className="min-h-screen  py-8 relative overflow-hidden" style={{ backgroundColor: COLORS.dark }}>
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
            Exploring the intersection of cutting-edge technology and elegant solutions
          </p>
          <div className='max-w-[30%] h-1 mt-2 mx-auto bg-orange-500'></div>
        </motion.div>
        


        {/* Projects Grid */}
        <ProjectCard projects={projects} setSelectedProject={(project: Project) => setSelectedProject(project)}/>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-full max-w-6xl bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-lg z-50"
                >
                  <FiX className="text-2xl text-gray-400" />
                </button>

                {/* Modal Content */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image Gallery */}
                  <div className="relative h-96 lg:h-auto">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6">{selectedProject.title}</h2>
                    
                    {/* Project Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-orange-500">Overview</h3>
                        <p className="text-gray-300">{selectedProject.details && selectedProject.details.overview}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-3 text-blue-500">Key Features</h3>
                        <ul className="space-y-3">
                          {selectedProject.highlights  && selectedProject.highlights.map((feature:string, i:number) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 mt-2 rounded-full bg-orange-500" />
                              <p className="text-gray-300 flex-1">{feature}</p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-bold mb-3 text-orange-500">Tech Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.details && selectedProject.details.stack.map((tech:string, i:number) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-blue-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold mb-3 text-blue-500">Architecture</h3>
                          <div className="p-4 bg-gray-800 rounded-lg">
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.details && selectedProject.details.architecture.split(' → ').map((comp:string, i:number) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 text-sm rounded-full bg-gray-900 text-orange-400"
                                >
                                  {comp}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 mt-8">
                        <a
                          href={selectedProject.demo}
                          className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                        >
                          <FiExternalLink className="text-lg" />
                          Live Demo
                        </a>
                        <a
                          href={selectedProject.github}
                          className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors"
                        >
                          <FiGithub className="text-lg" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
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
