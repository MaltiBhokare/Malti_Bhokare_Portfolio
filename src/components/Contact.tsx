// "use client";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-5xl font-extrabold text-green-500 mb-6"
//       >
//         Let’s Connect
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="text-gray-400 mb-10 max-w-xl text-center"
//       >
//         I’m always excited to collaborate on interesting projects 🚀. 
//         Reach out through my socials, drop me an email, or book a quick call.
//       </motion.p>

//       {/* Social Links */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//         className="flex flex-wrap gap-6 justify-center"
//       >
//         {/* Email */}
//         <a
//           href="mailto:maltibhokare2003@gmail.com"
//           className="flex items-center space-x-2 px-5 py-3 bg-gray-900 rounded-lg border border-green-600 hover:bg-green-600 hover:text-black transition"
//         >
//           <FaEnvelope className="text-xl" />
//           <span>Email</span>
//         </a>

//         {/* GitHub */}
//         <a
//           href="https://github.com/MaltiBhokare"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center space-x-2 px-5 py-3 bg-gray-900 rounded-lg border border-green-600 hover:bg-green-600 hover:text-black transition"
//         >
//           <FaGithub className="text-xl" />
//           <span>GitHub</span>
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://www.linkedin.com/in/malti-bhokare-35a04224b/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center space-x-2 px-5 py-3 bg-gray-900 rounded-lg border border-green-600 hover:bg-green-600 hover:text-black transition"
//         >
//           <FaLinkedin className="text-xl" />
//           <span>LinkedIn</span>
//         </a>

//         {/* Book a Call */}
        
//       </motion.div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-green-500 mb-6"
      >
        Let’s Connect
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 mb-10 max-w-xl text-center"
      >
        I’m always excited to collaborate on interesting projects 🚀. 
        Reach out through my socials, drop me an email, or check my location.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-wrap gap-6 justify-center"
      >
        {/* Email */}
        <a
          href="mailto:maltibhokare2003@gmail.com"
          className="flex items-center space-x-2 px-5 py-3 bg-gray-900 rounded-lg border border-green-600 hover:bg-green-600 hover:text-black transition"
        >
          <FaEnvelope className="text-xl" />
          <span>Email</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MaltiBhokare"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-5 py-3 bg-gray-900 rounded-lg border border-green-600 hover:bg-green-600 hover:text-black transition"
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/malti-bhokare-35a04224b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-5 py-3 bg-gray-900 rounded-lg border border-green-600 hover:bg-green-600 hover:text-black transition"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>

        {/* Location */}
        <div className="flex items-center space-x-2 px-5 py-3 bg-gray-900 rounded-lg border border-green-600">
          <FaMapMarkerAlt className="text-xl text-green-400" />
          <span>Pune, Maharashtra</span>
        </div>
      </motion.div>
    </section>
  );
}
