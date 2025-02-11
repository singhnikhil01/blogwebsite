'use client';
import { motion } from 'framer-motion';
import ContactCard from "../components/card/contactCard";
import { 
    FaLinkedin, 
    FaGithub, 
    FaTwitter, 
    FaDiscord,
    FaSlack,
    FaCalendarAlt,
    FaPaperPlane,
    FaWhatsapp
  } from "react-icons/fa";
  import { SiGmail } from "react-icons/si";

const ContactPage = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };


  const socialLinks = [
    {
      icon: <FaLinkedin className="w-8 h-8 text-[#0A66C2]" />,
      title: "LinkedIn",
      text: "Let's connect professionally",
      link: "https://linkedin.com/in/yourprofile",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <FaGithub className="w-8 h-8 text-gray-800 dark:text-gray-200" />,
      title: "GitHub",
      text: "Explore my projects & contributions",
      link: "https://github.com/yourprofile",
      color: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    {
      icon: <FaTwitter className="w-8 h-8 text-[#1DA1F2]" />,
      title: "Twitter",
      text: "Daily insights & tech updates",
      link: "https://twitter.com/yourhandle",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <FaDiscord className="w-8 h-8 text-[#5865F2]" />,
      title: "Discord",
      text: "Join my developer community",
      link: "https://discord.gg/yourinvite",
      color: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
    },
    {
      icon: <SiGmail className="w-8 h-8 text-[#EA4335]" />,
      title: "Gmail",
      text: "Send me an email directly",
      link: "mailto:your.email@example.com",
      color: "hover:bg-red-50 dark:hover:bg-red-900/20"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-[#4285F4]" />,
      title: "Book a Call",
      text: "Schedule a meeting",
      link: "https://calendly.com/yourprofile",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    }
  ];
  return (
    <div className="max-w-[]  py-32 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="text-center mb-16 px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Let's Build Something Amazing
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
        >
          Whether you have a project in mind, need consultation, or just want to connect - 
          I'm here to help turn your ideas into reality.
        </motion.p>
        
        <motion.div variants={fadeIn} className="flex justify-center space-x-4">
          <a
            href="#contact-form"
            className="px-8 py-3 bg-gradient-to-r from-orange-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Get in Touch
          </a>
          <a
            href="#collaboration-process"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            How We Work
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-orange-500/20 to-blue-600/20 rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 100 + 200}px`,
              height: `${Math.random() * 100 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Contact Section */}
      <section id="contact-form" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCard />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-orange-600 to-blue-700 p-1 rounded-2xl"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Let's discuss how we can bring your vision to life with innovative solutions.
              </p>
              <a
                href="#contact-form"
                className="inline-block px-8 py-3 bg-gradient-to-r from-orange-600 to-blue-700 text-white rounded-lg hover:shadow-xl transition-all"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Connect Through Your Preferred Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((channel, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-xl transition-all duration-300 ${channel.color} border border-gray-200 dark:border-gray-700 flex items-start space-x-4 group`}
              >
                <div className="flex-shrink-0">
                  {channel.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {channel.text}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <FaWhatsapp className="w-8 h-8 text-green-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    WhatsApp Business
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Chat for quick queries
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/yournumber"
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <FaPaperPlane className="mr-2" />
                Start Chat
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <FaSlack className="w-8 h-8 text-purple-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Slack Community
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Join our developer workspace
                  </p>
                </div>
              </div>
              <a
                href="https://join.slack.com/yourworkspace"
                className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <FaPaperPlane className="mr-2" />
                Join Workspace
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
