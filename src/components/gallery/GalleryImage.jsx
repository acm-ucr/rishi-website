"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const animations = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const GalleryImage = ({ trip }) => {
  return (
    <motion.div
      variants={animations}
      initial="start"
      whileInView="end"
      transition={{ delay: 0.2 }}
    >
      <Image
        alt="gallery"
        src={trip}
        className="transition-opacity duration-[2s] object-cover max-h-[300px] w-full"
      />
    </motion.div>
  );
};

export default GalleryImage;
