import React from 'react';

export const GlobalStyles = ({ darkMode }) => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(5deg); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .profile-image-container {
      width: 16rem;
      height: 16rem;
      border-radius: 9999px;
      overflow: hidden;
      box-shadow: 0 30px 60px -15px rgba(147, 51, 234, 0.5);
      animation: float 6s ease-in-out infinite;
      border: 6px solid transparent;
      background: linear-gradient(${darkMode ? '#1f2937' : 'white'}, ${darkMode ? '#1f2937' : 'white'}) padding-box,
                  linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%) border-box;
      position: relative;
    }
    @media (min-width: 640px) {
      .profile-image-container {
        width: 18rem;
        height: 18rem;
      }
    }
    .profile-image-container::before {
      content: '';
      position: absolute;
      inset: -6px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      border-radius: 9999px;
      z-index: -1;
      animation: gradient-shift 3s ease infinite;
      background-size: 200% 200%;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .fade-in {
      animation: fadeIn 1s ease-out;
    }
    .fade-in-delay-1 {
      animation: fadeIn 1s ease-out 0.2s backwards;
    }
    .fade-in-delay-2 {
      animation: fadeIn 1s ease-out 0.4s backwards;
    }
    .fade-in-delay-3 {
      animation: fadeIn 1s ease-out 0.6s backwards;
    }
    .social-icon {
      padding: 1rem;
      border-radius: 9999px;
      background: linear-gradient(135deg, rgb(147, 51, 234), rgb(219, 39, 119));
      color: white;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 10px 25px -5px rgba(147, 51, 234, 0.4);
    }
    .social-icon:hover {
      transform: translateY(-8px) scale(1.1);
      box-shadow: 0 20px 40px -10px rgba(147, 51, 234, 0.6);
    }
    .spinner {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      border: 4px solid rgb(147, 51, 234);
      border-top-color: transparent;
      border-radius: 9999px;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .project-card {
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      opacity: 0;
      transition: opacity 0.4s;
    }
    .project-card:hover::before {
      opacity: 1;
    }
    .project-card:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
    }
    .project-desc {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .modal-overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      animation: fadeIn 0.3s ease-out;
    }
    .modal-content {
      border-radius: 1.5rem;
      box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5);
      max-width: 42rem;
      width: 100%;
      padding: 2rem;
      max-height: 90vh;
      overflow-y: auto;
      backdrop-filter: blur(20px);
      animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .glass-card {
      backdrop-filter: blur(20px);
      background: ${darkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.8)'};
      border: 1px solid ${darkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(229, 231, 235, 0.5)'};
    }
    .skill-bar {
      height: 10px;
      border-radius: 9999px;
      overflow: hidden;
      background: ${darkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(229, 231, 235, 0.5)'};
    }
    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
    }
    .floating-shape {
      position: absolute;
      border-radius: 9999px;
      filter: blur(60px);
      opacity: 0.3;
      animation: float 20s ease-in-out infinite;
    }
    .nav-indicator {
      position: absolute;
      bottom: 0;
      height: 3px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: all 0.3s ease;
    }
  `}</style>
);
