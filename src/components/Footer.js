
"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black border-t border-green-600/30 py-10 mt-16 text-center">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6">
        {/* Email */}
        <a
          href="mailto:maltibhokare2003@gmail.com"
          className="p-3 rounded-full bg-gray-800 hover:bg-green-600 transition flex items-center justify-center"
          aria-label="Email"
        >
          <EnvelopeIcon className="w-6 h-6 text-green-400 group-hover:text-black" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/malti-bhokare-35a04224b"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:bg-green-600 transition flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 text-green-400 group-hover:text-black" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MaltiBhokare"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:bg-green-600 transition flex items-center justify-center"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 text-green-400 group-hover:text-black" />
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700/40 w-3/4 mx-auto mb-4"></div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-400 font-semibold">Malti.dev</span> · Built with 💻 & ❤️
      </p>
    </footer>
  );
}

