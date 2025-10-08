import { useState, useEffect } from 'react';

// GitHub username - update this to your GitHub username
const GITHUB_USERNAME = 'IneshAg';

// Color mapping for different languages
const languageColors = {
  'JavaScript': 'from-yellow-500 to-orange-500',
  'TypeScript': 'from-blue-500 to-cyan-500',
  'Python': 'from-blue-600 to-yellow-500',
  'Java': 'from-red-500 to-orange-600',
  'C++': 'from-blue-500 to-cyan-500',
  'C': 'from-gray-600 to-gray-800',
  'C#': 'from-purple-500 to-pink-500',
  'Go': 'from-cyan-500 to-blue-500',
  'Rust': 'from-orange-600 to-red-600',
  'Ruby': 'from-red-500 to-pink-500',
  'PHP': 'from-purple-600 to-blue-600',
  'Swift': 'from-orange-500 to-red-500',
  'Kotlin': 'from-purple-500 to-blue-500',
  'React': 'from-cyan-400 to-blue-500',
  'Vue': 'from-green-500 to-emerald-500',
  'HTML': 'from-orange-500 to-red-500',
  'CSS': 'from-blue-500 to-purple-500',
  'default': 'from-gray-500 to-gray-700'
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user's repositories from GitHub API
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            }
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();

        // Filter out forks and map to our project format
        const formattedProjects = repos
          .filter(repo => !repo.fork) // Exclude forked repositories
          .map(repo => ({
            id: repo.id.toString(),
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.language || 'Unknown',
            html_url: repo.html_url,
            homepage: repo.homepage,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            topics: repo.topics || [],
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            color: languageColors[repo.language] || languageColors['default']
          }))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // Sort by most recently updated

        setProjects(formattedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
        
        // Fallback to empty array on error
        setProjects([]);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
