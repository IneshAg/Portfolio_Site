import { useState, useEffect } from 'react';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fakeProjects = [
          {
            id: '1',
            name: 'Axe Game',
            description: 'Basic Game build on C++ .',
            language: 'C++',
            html_url: 'https://github.com/IneshAg/Axe_Game',
            color: 'from-blue-500 to-cyan-500'
          },
          {
            id: '2',
            name: 'Task Manager',
            description: 'Basic Task Manager .',
            language: 'React',
            html_url: 'https://github.com/IneshAg/Task',
            color: 'from-green-500 to-emerald-500'
          },
        
        ];
        
        setProjects(fakeProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return { projects, loading };
};
