import React from 'react';

const projects = [
  {
    title: 'TODO List',
    desc: 'Список задач с возможностью добавления, редактирования и удаления (React).',
    link: 'https://github.com/MagistrTheOne/todoapp',
    img: 'https://ibb.co/Nd32MbHp',
  },
];

const Projects = () => (
  <section id="projects" className="container mx-auto py-16 px-6">
    <h2 className="text-2xl font-bold mb-8 text-center">Проекты</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300 flex flex-col"
        >
          <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 flex-1">{p.desc}</p>
            <span className="mt-4 text-cyan-400 font-medium">More →</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;