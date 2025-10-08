import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer = ({ darkMode }) => {
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${borderClass}`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 Inesh Agarwal. Built with React & Tailwind CSS
        </p>
        <div className="flex gap-6 justify-center mt-6">
          <a href="https://github.com/IneshAg" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/inesh-agarwal/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="ineshag123@gmail.com" className="hover:text-purple-600 transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://www.instagram.com/inesh_agarwal._.7/" className="hover:text-purple-600 transition-colors">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
