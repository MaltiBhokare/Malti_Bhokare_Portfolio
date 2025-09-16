// export default function ProjectCard({ title, description, tech, live, github }) {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="mb-4">{description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {tech.map((t) => (
//           <span key={t} className="text-sm bg-gray-700 px-2 py-1 rounded">{t}</span>
//         ))}
//       </div>
//       <div className="flex space-x-4">
//         <a href={live} className="text-teal-400 hover:underline" target="_blank">Live</a>
//         <a href={github} className="text-teal-400 hover:underline" target="_blank">GitHub</a>
//       </div>
//     </div>
//   );
// }


"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  live,
  github,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 hover:-translate-y-2 transition transform duration-300 flex flex-col justify-between">
      {/* Title */}
      <h3 className="text-2xl font-bold text-green-400 mb-3 text-center md:text-left">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs md:text-sm bg-gray-800 border border-green-600 text-green-400 px-3 py-1 rounded-full shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-center md:justify-start gap-6">
        {/* Live Demo */}
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-400 hover:text-white hover:scale-105 transition"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>

        {/* GitHub */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-400 hover:text-white hover:scale-105 transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
}
