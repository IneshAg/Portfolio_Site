import React from 'react';

const skillsData = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Java' },
  { name: 'C' },
  { name: 'C++' },
  { name: 'Python' },
  { name: 'HTML' },
  { name: 'CSS' }
];

export const Skills = ({ darkMode }) => {
  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        <div className="glass-card rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skillsData.map((skill, idx) => (
              <div key={skill.name} style={{ animationDelay: `${idx * 100}ms` }} className="fade-in">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
                  <span className="text-xl font-semibold">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
