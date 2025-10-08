import React from 'react';
import { X, ExternalLink, Star, GitFork, Calendar, Tag } from 'lucide-react';

export const ProjectModal = ({ project, darkMode, onClose }) => {
  if (!project) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-3xl font-bold mb-3">{project.name}</h4>
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-sm px-4 py-2 rounded-full font-medium bg-gradient-to-r ${project.color} text-white inline-block`}>
                {project.language}
              </span>
              {project.stars > 0 && (
                <div className="flex items-center gap-1">
                  <Star size={18} className={darkMode ? 'text-yellow-400' : 'text-yellow-500'} fill="currentColor" />
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.stars} {project.stars === 1 ? 'star' : 'stars'}
                  </span>
                </div>
              )}
              {project.forks > 0 && (
                <div className="flex items-center gap-1">
                  <GitFork size={18} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.forks} {project.forks === 1 ? 'fork' : 'forks'}
                  </span>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          {project.description}
        </p>

        {project.topics && project.topics.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={18} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
              <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Topics
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-3 py-1 rounded-full ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className={`mb-6 pb-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Last updated: {formatDate(project.updated_at)}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2"
          >
            View on GitHub
            <ExternalLink size={20} />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-8 py-4 ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } rounded-xl font-semibold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2`}
            >
              Live Demo
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
