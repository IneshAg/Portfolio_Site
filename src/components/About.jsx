import React from 'react';
import { Award, Sparkles } from 'lucide-react';

export const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl shadow-2xl p-8 hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Experience</h4>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              I am currently in my second year and studying computer science and i am learning Web Dev right now
            </p>
          </div>
          <div className="glass-card rounded-3xl shadow-2xl p-8 hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
              <Sparkles className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Passion</h4>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              I'm passionate about creating great user experiences and want  
               explore new technologies .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
