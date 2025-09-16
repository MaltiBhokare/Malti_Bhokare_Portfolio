


"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const timeline = [
    {
      year: "2025 – Present",
      title: "MERN Stack & Shopify Developer – ExpressRegisterUSA",
      description:
        "Developing and deploying eCommerce + business registration platforms using MERN stack and Shopify. Worked on authentication, document automation, and client solutions.",
    },
    {
      year: "Jan 2025 – Jun 2025",
      title: "Software Developer Intern – Numetry Technologies",
      description:
        "Worked as a MERN Stack Developer intern, contributing to dynamic web applications and API integrations.",
    },
    {
      year: "2021 – 2025",
      title: "B.Tech in Computer Engineering – SVKM’s Institute of Technology, Dhule",
      description:
        "Explored Artificial Intelligence, Web Development, Cloud, and IoT. Actively participated in hackathons and innovation challenges.",
    },
    {
      year: "2019 – 2021",
      title: "Higher Secondary Education",
      description: "Focused on Science and Mathematics with a keen interest in programming.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center gap-12 px-8 py-20 bg-black text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/malti2.jpg" // 👈 make sure this image is inside /public
            alt="Malti Bhokare"
            width={350}
            height={350}
            className="rounded-2xl border-4 border-green-600 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-green-500">Me</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-green-400 font-semibold">Malti Bhokare</span>, 
            a passionate <span className="text-green-400">Full Stack (MERN) Developer </span> 
            and <span className="text-green-400">AI Enthusiast</span>.  
            I enjoy building scalable web apps, solving real-world problems with AI/ML, 
            and exploring innovative technologies.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My expertise lies in{" "}
            <span className="font-semibold text-green-400">
              MongoDB, Express.js, React, Node.js
            </span>{" "}
            along with{" "}
            <span className="font-semibold text-green-400">
              Python, AI/ML, and cloud deployment
            </span>.  
            I have built professional projects like{" "}
            <i>ExpressRegisterUSA</i>, influencer recommendation systems, and IoT-based apps.
          </p>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 w-full max-w-5xl"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          My <span className="text-green-500">Journey</span>
        </h2>
        <div className="relative border-l-4 border-green-600 pl-6 space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 hover:border-green-500 transition"
            >
              <span className="text-green-400 font-semibold">{item.year}</span>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
