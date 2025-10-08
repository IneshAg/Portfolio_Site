import React from 'react';
import { ExternalLink, Star, GitFork } from 'lucide-react';

export const Projects = ({ darkMode, projects, loading, error, onProjectClick }) => {
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
            <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Loading projects from GitHub...
            </p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-500 mb-4">Failed to load projects: {error}</p>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Please check your internet connection or try again later.
            </p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              No projects found.
            </p>
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
                  <div className="flex items-center gap-4">
                    <span className={`text-sm px-4 py-2 rounded-full font-medium bg-gradient-to-r ${project.color} text-white`}>
                      {project.language}
                    </span>
                    {project.stars > 0 && (
                      <div className="flex items-center gap-1">
                        <Star size={16} className={darkMode ? 'text-yellow-400' : 'text-yellow-500'} />
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {project.stars}
                        </span>
                      </div>
                    )}
                    {project.forks > 0 && (
                      <div className="flex items-center gap-1">
                        <GitFork size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {project.forks}
                        </span>
                      </div>
                    )}
                  </div>
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
