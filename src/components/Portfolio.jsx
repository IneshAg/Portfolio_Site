import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useProjects } from '../hooks/useProjects';
import { useActiveSection } from '../hooks/useActiveSection';
import { useContactForm } from '../hooks/useContactForm';
import { GlobalStyles } from './GlobalStyles';
import { FloatingShapes } from './FloatingShapes';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { ProjectModal } from './ProjectModal';

export default function Portfolio() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { projects, loading } = useProjects();
  const { activeSection, scrollToSection } = useActiveSection();
  const { formData, setFormData, formStatus, handleSubmit } = useContactForm();
  const [selectedProject, setSelectedProject] = useState(null);

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-all duration-500 relative overflow-hidden`}>
      <GlobalStyles darkMode={darkMode} />
      <FloatingShapes />
      <Navigation 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <Hero darkMode={darkMode} scrollToSection={scrollToSection} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects 
        darkMode={darkMode} 
        projects={projects} 
        loading={loading} 
        onProjectClick={setSelectedProject} 
      />
      <Contact 
        darkMode={darkMode} 
        formData={formData} 
        setFormData={setFormData} 
        formStatus={formStatus} 
        handleSubmit={handleSubmit} 
      />
      <Footer darkMode={darkMode} />
      <ProjectModal 
        project={selectedProject} 
        darkMode={darkMode} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
