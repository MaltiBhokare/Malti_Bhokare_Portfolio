
// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // Certifications with categories
// const certifications = [
//   // Programming
//   {
//     title: "Python Programming & Aptitude Training",
//     img: "/certs/python-training-1.png",
//     issuer: "Campus Credentials & SVKM's IoT Dhule",
//     date: "June 2024",
//     category: "Programming",
//   },
//   {
//     title: "C Programming Refresher Course",
//     img: "/certs/c-programming.jpeg",
//     issuer: "SVKM IoT Dhule",
//     date: "July 2024",
//     category: "Programming",
//   },
//   {
//     title: "C Training",
//     img: "/certs/c-training-1.png",
//     issuer: "Spoken Tutorial, IIT Bombay",
//     date: "Nov 2022",
//     category: "Programming",
//   },
//   {
//     title: "C++ Training",
//     img: "/certs/cpp-training-1.png",
//     issuer: "Spoken Tutorial, IIT Bombay",
//     date: "Dec 2022",
//     category: "Programming",
//   },
//   {
//     title: "Python 3.4.3 Training",
//     img: "/certs/python-spoken-1.png",
//     issuer: "Spoken Tutorial, IIT Bombay",
//     date: "Dec 2023",
//     category: "Programming",
//   },
//   {
//     title: "Python Basics",
//     img: "/certs/hackerrank-python-1.png",
//     issuer: "HackerRank",
//     date: "March 2024",
//     category: "Programming",
//   },
//   {
//     title: "Python Challenges",
//     img: "/certs/codechef.jpeg",
//     issuer: "CodeChef",
//     date: "2024",
//     category: "Programming",
//   },
//   {
//     title: "Data Analysis using Python",
//     img: "/certs/ibm-python-1.png",
//     issuer: "IBM Cognitive Class",
//     date: "Jan 2024",
//     category: "Programming",
//   },
//   {
//     title: "Python Internship",
//     img: "/certs/codsoft-1.png",
//     issuer: "CodSoft",
//     date: "Oct 2023",
//     category: "Programming",
//   },

//   // Web Development
//   {
//     title: "Web Development Training",
//     img: "/certs/web-training-1.png",
//     issuer: "Internshala Trainings",
//     date: "Nov 2022",
//     category: "Web Development",
//   },
//   {
//     title: "Web Development Internship",
//     img: "/certs/yhills-internship-1.png",
//     issuer: "YHills",
//     date: "Feb 2024",
//     category: "Web Development",
//   },
//   {
//     title: "Web Development Completion",
//     img: "/certs/yhills-webdev-1.png",
//     issuer: "YHills",
//     date: "Feb 2024",
//     category: "Web Development",
//   },
//   {
//     title: "Full Stack Web Dev Internship",
//     img: "/certs/bharat-intern-1.png",
//     issuer: "Bharat Intern",
//     date: "March 2024",
//     category: "Web Development",
//   },
//   {
//     title: "WordPress Development Project",
//     img: "/certs/wordpress-1.png",
//     issuer: "Coursera",
//     date: "July 2024",
//     category: "Web Development",
//   },

//   // Hackathons
//   {
//     title: "Hackathon Prototype Selection",
//     img: "/certs/hackathon-bob.jpeg",
//     issuer: "Bank of Baroda Hackathon",
//     date: "2024",
//     category: "Hackathons",
//   },
//   {
//     title: "Technocave Code-O-Thon",
//     img: "/certs/technocave-1.png",
//     issuer: "SVKM IoT Dhule",
//     date: "May 2024",
//     category: "Hackathons",
//   },
//   {
//     title: "Quasar 2.0 Hackathon",
//     img: "/certs/quasar.jpeg",
//     issuer: "VPPCOE&VA, Mumbai",
//     date: "March 2024",
//     category: "Hackathons",
//   },
//   {
//     title: "Upskill Mafia Web Dev Hackathon",
//     img: "/certs/upskill-1.png",
//     issuer: "Upskill Mafia",
//     date: "April 2024",
//     category: "Hackathons",
//   },
//   {
//     title: "AthenaHacks Hackathon",
//     img: "/certs/athenahacks-1.png",
//     issuer: "ACM-W India",
//     date: "Nov 2023",
//     category: "Hackathons",
//   },

//   // NPTEL & Spoken Tutorial
//   {
//     title: "Compiler Design",
//     img: "/certs/compiler.png",
//     issuer: "NPTEL IIT Madras",
//     date: "April 2024",
//     category: "NPTEL/Spoken Tutorial",
//   },
//   {
//     title: "Programming in Java (Elite)",
//     img: "/certs/java-nptel-1.png",
//     issuer: "NPTEL IIT Kharagpur",
//     date: "Apr 2023",
//     category: "NPTEL/Spoken Tutorial",
//   },
//   {
//     title: "PostgreSQL Training",
//     img: "/certs/postgres.png",
//     issuer: "Spoken Tutorial, IIT Bombay",
//     date: "Dec 2023",
//     category: "NPTEL/Spoken Tutorial",
//   },

//   // Cloud & AI
//   {
//     title: "AWS Academy Cloud Foundations",
//     img: "/certs/aws-cloud.png",
//     issuer: "AWS Academy",
//     date: "Oct 2024",
//     category: "Cloud & AI",
//   },
//   {
//     title: "AWS Cloud Practitioner Essentials",
//     img: "/certs/aws-aspire.png",
//     issuer: "Aspire for Her + AWS",
//     date: "Aug 2023",
//     category: "Cloud & AI",
//   },
//   {
//     title: "AI Generative Model Workshop",
//     img: "/certs/nxtwave.png",
//     issuer: "NxtWave",
//     date: "March 2024",
//     category: "Cloud & AI",
//   },
//   {
//     title: "AI & ML Fundamentals",
//     img: "/certs/techsaksham.png",
//     issuer: "Microsoft + SAP TechSaksham",
//     date: "2024",
//     category: "Cloud & AI",
//   },
//   {
//     title: "ChatGPT & AI Tools Workshop",
//     img: "/certs/skillnation.png",
//     issuer: "Skill Nation",
//     date: "Nov 2023",
//     category: "Cloud & AI",
//   },

//   // Achievements & Others
//   {
//     title: "Freedom with AI Masterclass",
//     img: "/certs/freedom-ai.png",
//     issuer: "Freedom with AI",
//     date: "June 2024",
//     category: "Achievements",
//   },
//   {
//     title: "Microsoft Excel Basics",
//     img: "/certs/excel.png",
//     issuer: "Coursera",
//     date: "June 2024",
//     category: "Achievements",
//   },
//   {
//     title: "Robotics Workshop",
//     img: "/certs/robotics.jpeg",
//     issuer: "E-Yantra IIT Bombay + SVKM IoT Dhule",
//     date: "Feb 2024",
//     category: "Achievements",
//   },
//   {
//     title: "Avishkar Research Competition",
//     img: "/certs/avishkar.png",
//     issuer: "DBATU Lonere",
//     date: "Nov 2022",
//     category: "Achievements",
//   },
// ];

// export default function Certifications() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = ["All", ...new Set(certifications.map((c) => c.category))];

//   const filteredCerts =
//     activeCategory === "All"
//       ? certifications
//       : certifications.filter((c) => c.category === activeCategory);

//   return (
//     <section className="py-20 bg-black text-white min-h-screen">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-extrabold text-center mb-12"
//       >
//         My{" "}
//         <span className="text-green-500 underline decoration-green-500">
//           Certifications
//         </span>
//       </motion.h2>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-12">
//         {categories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-5 py-2 rounded-full border ${
//               activeCategory === cat
//                 ? "bg-green-500 text-black border-green-500"
//                 : "border-gray-600 text-gray-300 hover:bg-gray-800"
//             } transition`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Certifications Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
//         {filteredCerts.map((cert, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.1 }}
//             whileHover={{ scale: 1.05 }}
//             className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-green-500 transition"
//           >
//             <Image
//               src={cert.img}
//               alt={cert.title}
//               width={500}
//               height={300}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-5">
//               <h3 className="text-xl font-bold text-green-400 mb-2">
//                 {cert.title}
//               </h3>
//               <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
//               <p className="text-gray-400 text-xs">{cert.date}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Certifications with categories
const certifications = [
  // Programming
  {
    title: "Python Programming & Aptitude Training",
    img: "/certs/python-training-1.png",
    issuer: "Campus Credentials & SVKM's IoT Dhule",
    date: "June 2024",
    category: "Programming",
  },
  {
    title: "C Programming Refresher Course",
    img: "/certs/c-programming.jpeg",
    issuer: "SVKM IoT Dhule",
    date: "July 2024",
    category: "Programming",
  },
  {
    title: "C Training",
    img: "/certs/c-training-1.png",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "Nov 2022",
    category: "Programming",
  },
  {
    title: "C++ Training",
    img: "/certs/cpp-training-1.png",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "Dec 2022",
    category: "Programming",
  },
  {
    title: "Python 3.4.3 Training",
    img: "/certs/python-spoken-1.png",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "Dec 2023",
    category: "Programming",
  },
  {
    title: "Python Basics",
    img: "/certs/hackerrank-python-1.png",
    issuer: "HackerRank",
    date: "March 2024",
    category: "Programming",
  },
  {
    title: "Python Challenges",
    img: "/certs/codechef.jpeg",
    issuer: "CodeChef",
    date: "2024",
    category: "Programming",
  },
  {
    title: "Data Analysis using Python",
    img: "/certs/ibm-python-1.png",
    issuer: "IBM Cognitive Class",
    date: "Jan 2024",
    category: "Programming",
  },
  {
    title: "Python Internship",
    img: "/certs/codsoft-1.png",
    issuer: "CodSoft",
    date: "Oct 2023",
    category: "Programming",
  },

  // Web Development
  {
    title: "Web Development Training",
    img: "/certs/web-training-1.png",
    issuer: "Internshala Trainings",
    date: "Nov 2022",
    category: "Web Development",
  },
  {
    title: "Web Development Internship",
    img: "/certs/yhills-internship-1.png",
    issuer: "YHills",
    date: "Feb 2024",
    category: "Web Development",
  },
  {
    title: "Web Development Completion",
    img: "/certs/yhills-webdev-1.png",
    issuer: "YHills",
    date: "Feb 2024",
    category: "Web Development",
  },
  {
    title: "Full Stack Web Dev Internship",
    img: "/certs/bharat-intern-1.png",
    issuer: "Bharat Intern",
    date: "March 2024",
    category: "Web Development",
  },
  {
    title: "WordPress Development Project",
    img: "/certs/wordpress-1.png",
    issuer: "Coursera",
    date: "July 2024",
    category: "Web Development",
  },

  // Hackathons
  {
    title: "Hackathon Prototype Selection",
    img: "/certs/hackathon-bob.jpeg",
    issuer: "Bank of Baroda Hackathon",
    date: "2024",
    category: "Hackathons",
  },
  {
    title: "Technocave Code-O-Thon",
    img: "/certs/technocave-1.png",
    issuer: "SVKM IoT Dhule",
    date: "May 2024",
    category: "Hackathons",
  },
  {
    title: "Quasar 2.0 Hackathon",
    img: "/certs/quasar.jpeg",
    issuer: "VPPCOE&VA, Mumbai",
    date: "March 2024",
    category: "Hackathons",
  },
  {
    title: "Upskill Mafia Web Dev Hackathon",
    img: "/certs/upskill-1.png",
    issuer: "Upskill Mafia",
    date: "April 2024",
    category: "Hackathons",
  },
  {
    title: "AthenaHacks Hackathon",
    img: "/certs/athenahacks-1.png",
    issuer: "ACM-W India",
    date: "Nov 2023",
    category: "Hackathons",
  },

  // NPTEL & Spoken Tutorial
  {
    title: "Compiler Design",
    img: "/certs/compiler.png",
    issuer: "NPTEL IIT Madras",
    date: "April 2024",
    category: "NPTEL/Spoken Tutorial",
  },
  {
    title: "Programming in Java (Elite)",
    img: "/certs/java-nptel-1.png",
    issuer: "NPTEL IIT Kharagpur",
    date: "Apr 2023",
    category: "NPTEL/Spoken Tutorial",
  },
  {
    title: "PostgreSQL Training",
    img: "/certs/postgres.png",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "Dec 2023",
    category: "NPTEL/Spoken Tutorial",
  },

  // Cloud & AI
  {
    title: "AWS Academy Cloud Foundations",
    img: "/certs/aws-cloud.png",
    issuer: "AWS Academy",
    date: "Oct 2024",
    category: "Cloud & AI",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    img: "/certs/aws-aspire.png",
    issuer: "Aspire for Her + AWS",
    date: "Aug 2023",
    category: "Cloud & AI",
  },
  {
    title: "AI Generative Model Workshop",
    img: "/certs/nxtwave.png",
    issuer: "NxtWave",
    date: "March 2024",
    category: "Cloud & AI",
  },
  {
    title: "AI & ML Fundamentals",
    img: "/certs/techsaksham.png",
    issuer: "Microsoft + SAP TechSaksham",
    date: "2024",
    category: "Cloud & AI",
  },
  {
    title: "ChatGPT & AI Tools Workshop",
    img: "/certs/skillnation.png",
    issuer: "Skill Nation",
    date: "Nov 2023",
    category: "Cloud & AI",
  },

  // Achievements & Others
  {
    title: "Freedom with AI Masterclass",
    img: "/certs/freedom-ai.png",
    issuer: "Freedom with AI",
    date: "June 2024",
    category: "Achievements",
  },
  {
    title: "Microsoft Excel Basics",
    img: "/certs/excel.png",
    issuer: "Coursera",
    date: "June 2024",
    category: "Achievements",
  },
  {
    title: "Robotics Workshop",
    img: "/certs/robotics.jpeg",
    issuer: "E-Yantra IIT Bombay + SVKM IoT Dhule",
    date: "Feb 2024",
    category: "Achievements",
  },
  {
    title: "Avishkar Research Competition",
    img: "/certs/avishkar.png",
    issuer: "DBATU Lonere",
    date: "Nov 2022",
    category: "Achievements",
  },
];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ["All", ...new Set(certifications.map((c) => c.category))];

  const filteredCerts =
    activeCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        My{" "}
        <span className="text-green-500 underline decoration-green-500">
          Certifications
        </span>
      </motion.h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-green-500 text-black border-green-500"
                : "border-gray-600 text-gray-300 hover:bg-gray-800"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {filteredCerts.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #22c55e" }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <Image
              src={cert.img}
              alt={cert.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-xs">{cert.date}</p>
              <button className="mt-3 text-sm bg-green-500 text-black px-3 py-1 rounded hover:bg-green-600 transition">
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-6 rounded-xl shadow-xl max-w-3xl w-full relative"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                ✕
              </button>
              <Image
                src={selectedCert.img}
                alt={selectedCert.title}
                width={800}
                height={600}
                className="w-full h-auto rounded"
              />
              <h3 className="text-2xl font-bold text-green-400 mt-4">
                {selectedCert.title}
              </h3>
              <p className="text-gray-300">{selectedCert.issuer}</p>
              <p className="text-gray-400 text-sm">{selectedCert.date}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}