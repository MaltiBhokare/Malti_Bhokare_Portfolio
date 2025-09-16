"use client";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ServerStackIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: <CodeBracketIcon className="w-6 h-6 text-green-500" />,
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 82 },
      ],
    },
    {
      title: "Frameworks",
      icon: <PuzzlePieceIcon className="w-6 h-6 text-green-500" />,
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js / Express", level: 80 },
        // { name: "Django", level: 65 },
        { name: "Bootstrap", level: 75 },
        { name: "PHP", level: 70 },
      ],
    },
    {
      title: "Databases",
      icon: <ServerStackIcon className="w-6 h-6 text-green-500" />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 82 },
        // { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      title: "Tools",
      icon: <WrenchScrewdriverIcon className="w-6 h-6 text-green-500" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 85 },
        // { name: "PyCharm", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
        My <span className="text-green-500 underline">Skills</span>
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Here’s a snapshot of my technical expertise across programming
        languages, frameworks, databases, and tools that I work with as a
        <span className="text-green-500 font-semibold"> Full Stack (MERN) Developer</span>.
      </p>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-2 transition duration-300"
          >
            {/* Category Title with Icon */}
            <div className="flex items-center gap-2 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-green-400">
                {category.title}
              </h3>
            </div>

            {/* Skills with Progress Bars */}
            {category.skills.map((skill, j) => (
              <div key={j} className="mb-4">
                <div className="flex justify-between text-gray-300 text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: j * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 shadow-lg shadow-green-500/30"
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
