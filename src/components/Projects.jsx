import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Projects = ({ darkMode, projects, loading, onProjectClick }) => {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        {loading ? (
          <div className="text-center">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl shadow-xl p-7 project-card"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => onProjectClick(project)}
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-6`}></div>
                <h4 className="text-2xl font-bold mb-4">{project.name}</h4>
                <p className={`text-base mb-6 project-desc ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-4 py-2 rounded-full font-medium bg-gradient-to-r ${project.color} text-white`}>
                    {project.language}
                  </span>
                  <ExternalLink size={20} className="text-purple-600" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
