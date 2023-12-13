"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing a bachelor's degree in{" "}
        <span className="font-medium">Computer Science and Information Systems</span> from BITS Pilani, Goa. I have a passion 
        for autonomous robotics and programming. I believe in project-based learning and have completed various guided 
        projects in Coursera in the field of {" "} <span className="font-medium">Machine Learning and Deep Learning</span>.{" "}
        <span className="italic">My favourite part of programming is</span> the 
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem after trying to solve it forever. My core stack
        is{" "}
        <span className="font-medium">
          C++, Python, Numpy, Matplotlib, Pandas, PyTorch and ROS
        </span>
        . I am also familiar with C, Java and TensorFlow. I am always looking to
        learn new technologies. I am currently looking for {" "}
        <span className="font-medium"> internship opportunities</span> as a research intern or software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy writing poems, listening to new music and trying out new hobbies.
         I also enjoy{" "} <span className="font-medium">learning new things</span>. I read various articles and blogs about {" "}
        <span className="font-medium">history and human psychology</span>.
      </p>
    </motion.section>
  );
}
