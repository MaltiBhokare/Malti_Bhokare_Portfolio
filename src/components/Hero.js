

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Typewriter } from "react-simple-typewriter";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { EnvelopeIcon } from "@heroicons/react/24/outline";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-6">
//       {/* Text Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="flex-1"
//       >
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
//           Hi, I’m <span className="text-green-600">Malti Bhokare</span>
//         </h1>

//         {/* Typewriter Effect for Roles */}
//         <p className="text-lg md:text-xl text-gray-400 mb-6 h-8">
//           <Typewriter
//             words={[
//               "Full Stack (MERN) Developer",
//               "AI Enthusiast",
//               "Computer Engineer",
//             ]}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </p>

//         {/* Buttons */}
//         <div className="flex gap-4 justify-center md:justify-start mb-6">
//           <a
//             href="/contact"
//             className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transform transition duration-300"
//           >
//             Contact Me
//           </a>
//           <a
//             href="/Malti_resume_2025.pdf"
//             target="_blank"
//             className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 transform transition duration-300"
//           >
//             Download Resume
//           </a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex gap-6 justify-center md:justify-start">
//           {/* Email */}
//           <a
//             href="mailto:maltibhokare2003@gmail.com"
//             className="p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
//             aria-label="Email"
//           >
//             <EnvelopeIcon className="w-6 h-6 text-green-400 hover:text-black transition" />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/malti-bhokare-35a04224b"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin className="w-6 h-6 text-green-400 hover:text-black transition" />
//           </a>

//           {/* GitHub */}
//           <a
//             href="https://github.com/MaltiBhokare"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
//             aria-label="GitHub"
//           >
//             <FaGithub className="w-6 h-6 text-green-400 hover:text-black transition" />
//           </a>
//         </div>
//       </motion.div>

//       {/* Profile Image with Glowing Border */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="flex-1 flex justify-center"
//       >
//         <div className="relative">
//           <Image
//             src="/malti.jpg"
//             alt="Malti Bhokare"
//             width={400}
//             height={400}
//             className="rounded-full border-4 border-green-600 shadow-xl"
//           />
//           {/* Glow Effect */}
//           <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-pulse blur-sm"></div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Typewriter } from "react-simple-typewriter";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { EnvelopeIcon } from "@heroicons/react/24/outline";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-12 px-4 sm:px-6 md:px-12 py-12">
//       {/* Text Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="flex-1"
//       >
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug">
//           Hi, I’m <span className="text-green-600">Malti Bhokare</span>
//         </h1>

//         {/* Typewriter Effect for Roles */}
//         <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 h-8">
//           <Typewriter
//             words={[
//               "Full Stack (MERN) Developer",
//               "AI Enthusiast",
//               "Computer Engineer",
//             ]}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
//           <a
//             href="/contact"
//             className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transform transition duration-300 text-sm sm:text-base"
//           >
//             Contact Me
//           </a>
//           <a
//             href="/Malti_resume_2025.pdf"
//             target="_blank"
//             className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 transform transition duration-300 text-sm sm:text-base"
//           >
//             Download Resume
//           </a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex gap-4 sm:gap-6 justify-center md:justify-start">
//           {/* Email */}
//           <a
//             href="mailto:maltibhokare2003@gmail.com"
//             className="p-2 sm:p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
//             aria-label="Email"
//           >
//             <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-black transition" />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/malti-bhokare-35a04224b"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 sm:p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-black transition" />
//           </a>

//           {/* GitHub */}
//           <a
//             href="https://github.com/MaltiBhokare"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 sm:p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
//             aria-label="GitHub"
//           >
//             <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-black transition" />
//           </a>
//         </div>
//       </motion.div>

//       {/* Profile Image with Glowing Border */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="flex-1 flex justify-center"
//       >
//         <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
//           <Image
//             src="/malti.jpg"
//             alt="Malti Bhokare"
//             fill
//             className="rounded-full border-4 border-green-600 shadow-xl object-cover"
//           />
//           {/* Glow Effect */}
//           <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-pulse blur-sm"></div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-12 px-4 sm:px-6 md:px-12 py-12">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug">
          Hi, I’m <span className="text-green-600">Malti Bhokare</span>
        </h1>

        {/* Typewriter Effect */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 h-8">
          <Typewriter
            words={[
              "Full Stack (MERN) Developer",
              "AI Enthusiast",
              "Computer Engineer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
          <a
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transform transition duration-300 text-sm sm:text-base"
          >
            Contact Me
          </a>
          <a
            href="/Malti_resume_2025.pdf"
            target="_blank"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 transform transition duration-300 text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 sm:gap-6 justify-center md:justify-start">
          <a
            href="mailto:maltibhokare2003@gmail.com"
            className="p-2 sm:p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
            aria-label="Email"
          >
            <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-black transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/malti-bhokare-35a04224b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-black transition" />
          </a>
          <a
            href="https://github.com/MaltiBhokare"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full bg-gray-900 hover:bg-green-600 transition flex items-center justify-center shadow-md hover:shadow-green-500/40"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-black transition" />
          </a>
        </div>
      </motion.div>

      {/* Profile Image with Oval Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-52 h-72 sm:w-64 sm:h-80 md:w-80 md:h-[28rem] lg:w-[22rem] lg:h-[32rem]">
          <Image
            src="/malti.jpg"
            alt="Malti Bhokare"
            fill
            className="object-cover rounded-[2rem] border-4 border-green-600 shadow-xl"
          />
          {/* Oval Glow Effect */}
          <div className="absolute inset-0 rounded-[2rem] border-4 border-green-500 animate-pulse blur-sm"></div>
        </div>
      </motion.div>
    </section>
  );
}
