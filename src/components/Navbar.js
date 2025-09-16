
// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo / Name */}
//         <h1 className="text-2xl font-extrabold tracking-wide text-white">
//           <span className="text-green-500">Malti</span>.dev
//         </h1>

//         {/* Links */}
//         <div className="hidden md:flex space-x-8">
//           {/* Home / Hero */}
//           <Link
//             href="/"
//             className="relative text-gray-300 font-medium group hover:text-green-400 transition"
//           >
//             Home
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           {/* About */}
//           <Link
//             href="/about"
//             className="relative text-gray-300 font-medium group hover:text-green-400 transition"
//           >
//             About
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           {/* Skills */}
//           <Link
//             href="/#skills"
//             className="relative text-gray-300 font-medium group hover:text-green-400 transition"
//           >
//             Skills
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           {/* Projects */}
//           <Link
//             href="/#projects"
//             className="relative text-gray-300 font-medium group hover:text-green-400 transition"
//           >
//             Projects
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           {/* Experience */}
//           <Link
//             href="/experience"
//             className="relative text-gray-300 font-medium group hover:text-green-400 transition"
//           >
//             Experience
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           <Link
//   href="/certifications"
//   className="relative text-gray-300 font-medium group hover:text-green-400 transition"
// >
//   Certifications
//   <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
// </Link>


//           {/* Contact */}
//           <Link
//             href="/contact"
//             className="relative text-gray-300 font-medium group hover:text-green-400 transition"
//           >
//             Contact
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          <span className="text-green-500">Malti</span>.dev
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {/* Home / Hero */}
          <Link
            href="/"
            className="relative text-gray-300 font-medium group hover:text-green-400 transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="relative text-gray-300 font-medium group hover:text-green-400 transition"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Skills */}
          <Link
            href="/#skills"
            className="relative text-gray-300 font-medium group hover:text-green-400 transition"
          >
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Projects */}
          <Link
            href="/#projects"
            className="relative text-gray-300 font-medium group hover:text-green-400 transition"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Experience */}
          <Link
            href="/experience"
            className="relative text-gray-300 font-medium group hover:text-green-400 transition"
          >
            Experience
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Education 👇 NEW */}
          <Link
            href="/education"
            className="relative text-gray-300 font-medium group hover:text-green-400 transition"
          >
            Education
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Certifications */}
          <Link
            href="/certifications"
            className="relative text-gray-300 font-medium group hover:text-green-400 transition"
          >
            Certifications
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="relative text-gray-300 font-medium group hover:text-green-400 transition"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
