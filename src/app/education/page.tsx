"use client";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      year: "2021 – 2025",
      degree: "B.Tech in Computer Engineering",
      institution: "SVKM’s Institute of Technology, Dhule",
      details:
        "Specialized in Artificial Intelligence, Web Development, Cloud Computing, and IoT. Actively participated in hackathons, research, and innovation challenges.",
    },
    {
      year: "2019 – 2021",
      degree: "Higher Secondary (HSC)",
      institution: "State Board – Science Stream",
      details:
        "Focused on Physics, Chemistry, and Mathematics with programming as an area of interest.",
    },
    {
      year: "2018 – 2019",
      degree: "Secondary School (SSC)",
      institution: "State Board",
      details:
        "Excelled in Mathematics and Computer Science, laying the foundation for engineering studies.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-8">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        My <span className="text-green-500 underline">Education</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-4 border-green-600 pl-6 max-w-4xl mx-auto space-y-12">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 hover:border-green-500 transition"
          >
            <span className="text-green-400 font-semibold">{edu.year}</span>
            <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-gray-400 mt-2">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
