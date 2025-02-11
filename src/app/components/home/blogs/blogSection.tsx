"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const BlogSection = () => {
  const blogs = [
    {
      title: "Advanced Neural Architectures",
      category: "AI/ML",
      date: "Mar 15, 2024",
      keywords: ["Deep Learning", "GANs", "Transformers"],
      description: "Exploring cutting-edge neural network designs for modern AI applications",
      image: "/blog-ai.jpg"
    },
    {
      title: "Quantum Computing Basics",
      category: "Emerging Tech",
      date: "Mar 12, 2024",
      keywords: ["Qubits", "Superposition", "Algorithms"],
      description: "Fundamental concepts powering the next computing revolution",
      image: "/blog-quantum.jpg"
    },
    {
      title: "WebAssembly Mastery",
      category: "Web Development",
      date: "Mar 8, 2024",
      keywords: ["Performance", "Rust", "Security","cloud"],
      description: "Unlocking native-speed execution in web applications",
      image: "/blog-wasm.jpg"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-700 to-orange-200 bg-clip-text text-transparent">
            Cognitive Chronicles
          </h2>
          <p className="text-xl text-gray-400">
            Insights into Modern Technology
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                {/* <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Category Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-orange/20 text-blue-600 rounded-full text-sm backdrop-blur-sm">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="text-gray-400 text-sm">{blog.date}</div>
                  <div className="flex gap-2">
                    {blog.keywords.map((keyword, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-orange-200 rounded-md text-gray-900 text-xs overflow-clip"
                      >
                        #{keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div className=""><h3 className="text-2xl font-bold text-white mb-3 ">
                  {blog.title}
                </h3></div>

                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {blog.description}
                </p>

                {/* Read More Button */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className=" inline-flex items-center gap-2 text-blue-400 hover:text-orange-400 transition-colors"
                >
                  <span className="text-orange-400">Read Article</span>
                  <FiArrowUpRight className="text-xl  text-orange-400 transition-transform group-hover:rotate-45" />
                </motion.a>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl hover:shadow-2xl transition-all"
          >
            <span className="font-medium">Explore All Articles</span>
            <FiArrowUpRight className="text-xl" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;