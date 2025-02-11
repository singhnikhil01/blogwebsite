"use client";
import { motion } from "framer-motion";
import GalleryCard from "../components/card/galleryCard";

const GalleryPage = () => {
  const images = [
    {
      id: 1,
      src: "/images/nikhil.png",
      category: "Nature",
      caption: "Mountain Sunrise",
      description:
        "Golden hour capturing the first light hitting snow-capped peaks in the Himalayas. Shot with ND filter for long exposure cloud movement.",
      camera: "Sony A7IV",
      lens: "24-70mm f/2.8 GM",
      settings: "f/8, 1/60s, ISO 100",
    },
    {
      id: 2,
      src: "/images/nikhil.png",
      category: "Architecture",
      caption: "Urban Geometry",
      description:
        "Abstract patterns in modern city architecture emphasizing clean lines and reflective surfaces. Composite of multiple exposures.",
      camera: "Canon R5",
      lens: "16-35mm f/4 L",
      settings: "f/11, 1/125s, ISO 200",
    },
    {
      id: 3,
      src: "/images/nikhil.png",
      category: "Architecture",
      caption: "Urban Geometry",
      description:
        "Abstract patterns in modern city architecture emphasizing clean lines and reflective surfaces. Composite of multiple exposures.",
      camera: "Canon R5",
      lens: "16-35mm f/4 L",
      settings: "f/11, 1/125s, ISO 200",
    },
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Frame the Unseen
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A Journey Through Captivating Visuals
        </p>
        
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <GalleryCard photos={images} />
      </div>
      
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-16"
      >
        <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all">
          Explore More
        </button>
      </motion.div> */}
    </section>
  );
};

export default GalleryPage;