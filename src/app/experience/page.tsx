// "use client";
// import { motion } from "framer-motion";

// export default function Experience() {
//   const experiences = [
//     {
//       role: "MERN Stack & Shopify Developer",
//       company: "ExpressRegisterUSA",
//       duration: "June 2025 – Present",
//       description:
//         "Developed and deployed the website using the MERN stack. Built and customized Shopify stores with Liquid, HTML/CSS, and JavaScript. Integrated apps, optimized SEO, and delivered tailored eCommerce solutions.",
//     },
//     {
//       role: "Software Developer Intern",
//       company: "Numetry Technologies",
//       duration: "Jan 2025 – Jun 2025",
//       description:
//         "Worked as a MERN Stack Developer intern. Contributed to dynamic web applications, API development, and improving application performance.",
//     },
//     {
//       role: "Internship",
//       company: "YHills Edutech",
//       duration: "2024",
//       description:
//         "Completed internship projects focused on web development, cloud integration, and AI concepts.",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-20">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-5xl font-extrabold text-center mb-12"
//       >
//         My <span className="text-green-500">Experience</span>
//       </motion.h1>

//       {/* Timeline */}
//       <div className="relative border-l-4 border-green-600 max-w-4xl mx-auto pl-6 space-y-12">
//         {experiences.map((exp, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 hover:border-green-500 transition"
//           >
//             <span className="text-green-400 font-semibold">{exp.duration}</span>
//             <h3 className="text-2xl font-bold mt-2">
//               {exp.role} – <span className="text-green-400">{exp.company}</span>
//             </h3>
//             <p className="text-gray-300 mt-2">{exp.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack & Shopify Developer",
      company: "ExpressRegisterUSA",
      duration: "June 2025 – Present",
      description:
        "Developed and deployed the website using the MERN stack. Built and customized Shopify stores with Liquid, HTML/CSS, and JavaScript. Integrated apps, optimized SEO, and delivered tailored eCommerce solutions.",
    },
    {
      role: "Software Developer Intern",
      company: "Numetry Technologies",
      duration: "Jan 2025 – Jun 2025",
      description:
        "Worked as a MERN Stack Developer intern. Contributed to dynamic web applications, API development, and improving application performance.",
    },
    {
      role: "Internship",
      company: "YHills Edutech",
      duration: "2024",
      description:
        "Completed internship projects focused on web development, cloud integration, and AI concepts.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12"
      >
        My <span className="text-green-500">Experience</span>
      </motion.h1>

      {/* Timeline */}
      <div className="relative border-l-4 border-green-600 max-w-3xl sm:max-w-4xl mx-auto pl-4 sm:pl-6 space-y-8 sm:space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md border border-gray-700 hover:border-green-500 transition"
          >
            <span className="text-green-400 font-semibold text-sm sm:text-base">
              {exp.duration}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
              {exp.role} –{" "}
              <span className="text-green-400">{exp.company}</span>
            </h3>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
