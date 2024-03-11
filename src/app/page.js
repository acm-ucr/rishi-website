"use client";
import Heading from "@/components/Heading";
import Carousel from "@/components/home/Carousel";
import Divider from "@/components/home/Divider";
import Landing from "@/components/home/Landing";
import Mission from "@/components/home/Mission";
import Socials from "@/components/home/Socials";

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

const Home = () => {
  return (
    <>
      <Landing />

      <Heading text="ABOUT US" />
      <div className="py-3" />
      <Mission />
      <div className="py-5" />
      <Carousel />
      <div className="py-5" />
      <Divider />
      <div className="py-5" />
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
      >
        <Heading text="JOIN US" />
        <div className="py-3" />
        <Socials />
      </motion.div>
    </>
  );
};

export default Home;
