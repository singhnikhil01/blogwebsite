"use client";
import { motion } from "framer-motion";
import GalleryCard from "../components/card/galleryCard";
import {images} from "@/app/constants/imagesData"

const GalleryPage = () => {
  

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
      
    
    </section>
  );
};

export default GalleryPage;