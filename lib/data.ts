import React from "react";
// import { FaReact } from "react-icons/fa";
import { IoPlanetOutline } from "react-icons/io5";
import { PiListMagnifyingGlass } from "react-icons/pi";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import kratos_descriptionImg from "@/public/kratos_description.png";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Subsystem Lead",
    location: "Sancoale, Goa, India",
    description:
      "Worked as the Autonomous Subsystem lead of Project Kratos, a multidisciplinary student-led team making Mars rover.",
    icon: React.createElement(IoPlanetOutline),
    date: "2023 - 2024",
  },
    {
    title: "Research Intern, CSIR - CEERI",
    location: "Pilani, Rajasthan, India",
    description:
      "Worked under Dr Dhiraj Sangwan on using deep learning techniques for damage restoration of wall murals.",
    icon: React.createElement(PiListMagnifyingGlass),
    date: "2023",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Project Kratos",
    description:
      "Autonomous Subsystem Lead of Project Kratos, an interdisciplinary student-run team making a Mars rover. Worked with ROS for autonomous traversal of the rover.",
    tags: ["ROS", "Python", "Gazebo", "OpenCV", "Linux"],
    imageUrl: kratos_descriptionImg,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Python",
  "Java",
  "MATLAB",
  "Numpy",
  "Matplotlib",
  "Pandas",
  "Seaborn",
  "OpenCV",
  "Scikit-Learn",
  "ROS",
  "PyTorch",
  "Tensorflow",
  "Keras",
  "Gazebo",
  "CoppeliaSim",
  "Git",
  "Linux",
] as const;
