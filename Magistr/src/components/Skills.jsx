import React from 'react';

const stack = [
  { name: 'React ts+js', color: 'text-cyan-400', icon: '⚛️' },
  { name: 'Next.js', color: 'text-gray-100', icon: '⏭️' },
  { name: 'Node.js', color: 'text-green-400', icon: '🟢' },
  { name: 'Express', color: 'text-yellow-400', icon: '🚂' },
  { name: 'TypeScript', color: 'text-blue-400', icon: '🟦' },
  { name: 'Tailwind CSS 4.0', color: 'text-teal-300', icon: '🌊' },
  { name: 'MongoDB,supabase', color: 'text-green-500', icon: '🍃' },
  { name: 'PostgreSQL', color: 'text-blue-300', icon: '🐘' },
  { name: 'Git,github', color: 'text-orange-400', icon: '🔧' },
];

const Skills = () => (
  <section id="skills" className="container mx-auto py-16 px-6">
    <h2 className="text-2xl font-bold mb-8 text-center">Stack</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {stack.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300"
        >
          <span className={`text-4xl mb-2 ${tech.color}`}>{tech.icon}</span>
          <span className="font-semibold text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;