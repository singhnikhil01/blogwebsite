"use client";
import { motion } from "framer-motion";
import GalleryCard from "../../card/galleryCard";
import Link from "next/link";
import { images } from "@/app/constants/imagesData";
const GallerySection = () => {
  

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          Visual Chronicles
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Moments Captured Through the Lens
        </p>
      </motion.div>

      {/* Gallery Card Component */}
      <GalleryCard photos={images} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-16"
      >
        <Link href="/gallery">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-xl hover:shadow-2xl transition-all">
            Gallery
            <span className="text-xl"></span>
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default GallerySection;
