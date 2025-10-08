import React from 'react';
import { Code2, Moon, Sun } from 'lucide-react';

export const Navigation = ({ darkMode, toggleDarkMode, activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full glass-card shadow-lg z-50 transition-all duration-500 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          <div className="flex items-center gap-8 sm:gap-12">
            <button 
              onClick={() => scrollToSection('about')} 
              className={`font-semibold text-base transition-all duration-300 ${activeSection === 'about' ? 'text-purple-600 scale-105' : 'hover:text-purple-600 hover:scale-105'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`font-semibold text-base transition-all duration-300 ${activeSection === 'skills' ? 'text-purple-600 scale-105' : 'hover:text-purple-600 hover:scale-105'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`font-semibold text-base transition-all duration-300 ${activeSection === 'projects' ? 'text-purple-600 scale-105' : 'hover:text-purple-600 hover:scale-105'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`font-semibold text-base transition-all duration-300 ${activeSection === 'contact' ? 'text-purple-600 scale-105' : 'hover:text-purple-600 hover:scale-105'}`}
            >
              Contact
            </button>
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full glass-card hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
