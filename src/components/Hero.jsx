import React from 'react';
import { Github, Linkedin, Mail, Sparkles, Rocket } from 'lucide-react';

export const Hero = ({ darkMode, scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="profile-image-container">
            <img
              src="/Profile_Photo.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start fade-in">
              <Sparkles className="text-yellow-500" size={24} />
              <span className="text-purple-600 font-semibold text-lg">Welcome to my portfolio</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 fade-in-delay-1">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Inesh Agarwal
              </span>
            </h2>
            <p className={`text-xl sm:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium fade-in-delay-2`}>
              Aspiring Engineer
            </p>
            <p className={`text-lg sm:text-xl mb-10 max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed fade-in-delay-2`}>
             I am a person who is always learning and exploring new technologies. 
            </p>
            <div className="flex gap-5 justify-center md:justify-start mb-8 fade-in-delay-3">
              <a href="https://github.com/IneshAg" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/inesh-agarwal/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
              <a href="ineshag123@gmail.com" className="social-icon">
                <Mail size={24} />
              </a>
            </div>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl fade-in-delay-3 inline-flex items-center gap-2"
            >
              View My Work
              <Rocket size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
