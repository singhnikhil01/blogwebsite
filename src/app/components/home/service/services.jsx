"use client";
import { motion } from "framer-motion";
import { TbCode, TbBrain, TbBinary, TbLanguage, TbChartArrows, TbSeo } from "react-icons/tb";

const  ServicesSection=()=> {
  const services = [
    {
      icon: <TbCode />,
      title: "Full-Stack Development",
      description: "Building responsive web applications with modern architectures",
      tech: ["React/Next.js", "Node.js", "GraphQL", "REST APIs", "TypeScript"],
      color: "text-orange-400"
    },
    {
      icon: <TbBrain />,
      title: "Machine Learning",
      description: "Designing intelligent systems that learn and adapt",
      tech: ["Predictive Modeling", "Computer Vision", "Scikit-Learn", "XGBoost"],
      color: "text-amber-400"
    },
    {
      icon: <TbBinary />,
      title: "Deep Learning",
      description: "Implementing complex neural network architectures",
      tech: ["TensorFlow", "PyTorch", "CNNs", "RNNs", "Transformers"],
      color: "text-orange-300"
    },
    {
      icon: <TbLanguage />,
      title: "NLP Solutions",
      description: "Teaching machines to understand human language",
      tech: ["BERT", "GPT Models", "Sentiment Analysis", "Chatbots"],
      color: "text-amber-300"
    },
    {
      icon: <TbChartArrows />,
      title: "MLOps Engineering",
      description: "Bridging development and operations for AI systems",
      tech: ["Docker", "Kubeflow", "CI/CD", "Monitoring"],
      color: "text-orange-400"
    },
    {
      icon: <TbSeo />,
      title: "Digital Marketing",
      description: "Driving growth through data-driven strategies",
      tech: ["SEO", "SEM", "Social Analytics", "Conversion Optimization"],
      color: "text-amber-400"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-4">
            Digital Craftsmanship
          </h2>
          <p className="text-gray-400 text-lg">
            Where technical excellence meets strategic innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 hover:border-orange-400/30 transition-all"
            >
              <div className={`text-5xl mb-6 ${service.color}`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-gray-300/10 text-white"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Unified Approach Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-50/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              <TbCode className="inline-block mr-2 mb-1 text-orange-400" />
              Holistic Digital Strategy
            </h3>
            <p className="text-gray-400">
              Bridging technical implementation with business objectives through:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {['Cross-functional Integration', 'Data-Driven Decisions', 
                'Scalable Architectures', 'User-Centric Design'].map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection