import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export const ProjectModal = ({ project, darkMode, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-3xl font-bold mb-2">{project.name}</h4>
            <span className={`text-sm px-4 py-2 rounded-full font-medium bg-gradient-to-r ${project.color} text-white inline-block`}>
              {project.language}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          {project.description}
        </p>
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2"
        >
          View on GitHub
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};
