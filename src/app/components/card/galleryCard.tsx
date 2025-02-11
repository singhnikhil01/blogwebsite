"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiZoomIn,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiInfo,
} from "react-icons/fi";

interface Photo {
  id: number;
  src: string;
  category: string;
  caption: string;
  description: string;
  camera: string;
  lens: string;
  settings: string;
}

interface Props {
  photos: Photo[];
}

const GalleryCard: React.FC<Props> = ({ photos }) => {
  const [selectedImg, setSelectedImg] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showDescription, setShowDescription] = useState<boolean>(true);

  const openLightbox = (img: Photo, index: number) => {
    setSelectedImg(img);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImg(null);
  };

  const navigate = (direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = photos.length - 1;
    if (newIndex >= photos.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setSelectedImg(photos[newIndex]);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {photos.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="mb-8 relative group cursor-pointer break-inside-avoid"
            onClick={() => openLightbox(img, index)}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-center text-white">
                  <div>
                    <h3 className="text-xl font-semibold">{img.caption}</h3>
                    <p className="text-sm text-gray-300">{img.category}</p>
                  </div>
                  <FiZoomIn className="text-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 backdrop-blur-xl"
        >
          {/* Toggle Details Button */}
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="absolute top-6 left-6 transition-colors text-orange-500"
          >
            <p className="flex items-center gap-x-2">
              <FiInfo className="text-2xl" /> Details
            </p>
          </button>

          {/* Metadata Panel */}
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: showDescription ? 0 : -500 }}
            className="absolute left-6 z-50 top-20 bg-black/50 p-6 rounded-xl backdrop-blur-sm w-80"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Shot Details
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-sm text-orange-400">Camera</p>
                <p>{selectedImg.camera}</p>
              </div>
              <div>
                <p className="text-sm text-orange-400">Lens</p>
                <p>{selectedImg.lens}</p>
              </div>
              <div>
                <p className="text-sm text-orange-400">Settings</p>
                <p>{selectedImg.settings}</p>
              </div>
              <div>
                <p className="text-sm text-orange-400">Description</p>
                <p className="text-white/80">{selectedImg.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl hover:text-orange-500 transition-colors"
          >
            <FiX />
          </button>

          {/* Image Display with Navigation */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-[90vw] max-h-[90vh]"
          >
            <img
              src={selectedImg.src}
              alt={selectedImg.caption}
              className="md:w-[80%] h-[40%] object-contain rounded-xl shadow-2xl"
            />

            {/* Animated Caption */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="absolute bottom-6 z-50 left-6 text-white bg-black/50 p-4 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold">{selectedImg.caption}</h3>
              <p className="text-gray-300">{selectedImg.category}</p>
            </motion.div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-6 text-white text-3xl hover:text-orange-500 transition-colors"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-6 text-white text-3xl hover:text-orange-500 transition-colors"
          >
            <FiChevronRight />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default GalleryCard;
