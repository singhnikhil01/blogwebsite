"use client";

import { motion, useInView } from "framer-motion";
import {  useRef } from "react";
import { FaCheckCircle, FaUniversity, FaSchool} from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const educationData = [

    {
        year: "2019 - 2023",
        title: "Bachelor of Technology (CSE)",
        institution: "Amrita Vishwa Vidyapeetham, Kerala",
        icon: <FaUniversity className="w-6 h-6 text-orange-500" />,
        highlights: [
            "CGPA: 8.2/10",
            "Specialization in AI & Machine Learning",

        ]
    },
    {
        year: "2017 - 2019",
        title: "Higher Secondary Education",
        institution: "Delhi Public School, New Delhi",
        icon: <FaSchool className="w-6 h-6 text-orange-500" />,
        highlights: [
            "Scored 95% in CBSE Board Exams",
            "Head of Science Club",
        ]
    },
   
    {
        year: "2017 - 2019",
        title: "Higher Secondary Education",
        institution: "Delhi Public School, New Delhi",
        icon: <FaSchool className="w-6 h-6 text-orange-500" />,
        highlights: [
            "Scored 95% in CBSE Board Exams",
            "Head of Science Club",
        ]
    },
  
];

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const lineVariants = {
    hidden: { height: 0 },
    visible: {
        height: "100%",
        transition: { duration: 1, ease: "easeInOut", delay: 0.3 },
    },
};

export default function EducationSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            viewport={{ amount: 0.3 }}
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-x-hidden"
        >
            <div className="mx-auto max-w-4xl">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-8 md:mb-12"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                    }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h2 className="text-3xl md:text-4xl font-bold  dark:text-orange-400 mb-3">
                        Education Journey
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        A journey of learning and growth.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
    
                    <motion.div
                        className="absolute w-1 h-full bg-gradient-to-b from-orange-500 to-blue-500 left-1/2 transform -translate-x-1/2 origin-top"
                        variants={lineVariants}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 200 }}
                        transition={{ duration: 1}}
                        animate={isInView ? "visible" : "hidden"}
                    ></motion.div>

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-0">
                        {educationData.map((edu, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    className={`timeline-item relative ${isEven ? "md:mr-auto" : "md:ml-auto"} ${isEven ? "md:text-right" : "md:text-left"}`}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <div className="relative z-10">
                                        {/* Dot */}
                                        <motion.div
                                            className="w-8 h-8 bg-white dark:bg-gray-800 border-2 border-orange-500 rounded-full absolute left-[50%] -translate-x-1/2 -mt-4 flex items-center justify-center"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {edu.icon}
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 md:w-96 "
                                            style={{
                                                marginLeft: isEven ? "auto" : "unset",
                                                marginRight: isEven ? "unset" : "auto",
                                            }}
                                            whileHover={{ scale: 1.03, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <h3 className="font-semibold text-xl text-gray-800 dark:text-white mb-2 flex items-center">
                                                <MdDateRange className="mr-1 text-gray-500" />{edu.year}
                                            </h3>
                                            <h4 className="font-bold text-2xl text-orange-600 dark:text-orange-400 mb-3 text-start">{edu.title}</h4>
                                            <p className="text-blue-600 dark:text-blue-400 text-lg text-start mb-3">{edu.institution}</p>
                                            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                                                {edu.highlights.map((highlight, i) => (
                                                    <li key={i} className="mb-1 flex items-center">
                                                        <FaCheckCircle className="w-4 h-4 mr-1 text-green-500" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                <motion.div
                    className="text-center mt-10 md:mt-14 overflow-x-hidden"
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: educationData.length * 0.2 } },
                    }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-blue-700 text-white hover:shadow-md transition-all text-lg font-semibold"
                    >
                        Let&apos;s Connect →
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}