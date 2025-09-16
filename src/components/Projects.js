"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
  title: "ExpressRegisterUSA",
  description:
    "MERN stack platform for business registration with secure auth, order tracking, document management, and payments.",
  tech: ["MongoDB", "Express.js", "React", "Node.js"],
  github: "https://github.com/MaltiBhokare/express_demo",
 
},

    {
      title: "Influencer Recommendation System using GNNs",
      description:
        "Built with PyTorch Geometric, this project recommends influencers using GCN & GAT on real-world datasets.",
      tech: ["Python", "PyTorch", "NetworkX"],
      github: "https://github.com/MaltiBhokare",
    },
    {
      title: "Smart QR-based Chocolate Vending Machine",
      description:
        "Flask + Raspberry Pi project integrated with Razorpay API for automated QR-based chocolate dispensing.",
      tech: ["Python", "Flask", "Raspberry Pi"],
      github: "https://github.com/MaltiBhokare/Final_vending_1",
    },
    {
      title: "QR-based Attendance System",
      description:
        "Attendance tracking system using QR codes, built with PHP, JavaScript, and DBMS.",
      tech: ["PHP", "JavaScript", "DBMS"],
      github: "https://github.com/MaltiBhokare",
    },
    {
  title: "Digitalcraftstudio Website",
  description:
    "A responsive website built with HTML, CSS, JavaScript, and Bootstrap to showcase services, portfolio, and client solutions with a professional design.",
  tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  github: "https://github.com/MaltiBhokare/MaltiBhokare-Digitalcraftstudio",
},

  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        My <span className="text-green-500 underline decoration-green-500">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-3">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-green-600/20 text-green-400 rounded-full border border-green-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <a
              href={p.github}
              target="_blank"
              className="inline-block mt-2 px-4 py-2 text-sm font-semibold border border-green-500 text-green-500 rounded-lg hover:bg-green-600 hover:text-white transition"
            >
              🔗 View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
