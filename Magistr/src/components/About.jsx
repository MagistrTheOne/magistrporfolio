import React from 'react';

const About = () => (
  <section
    id="about"
    className="container mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10"
  >
    <div className="relative mb-8 md:mb-0">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 blur opacity-60"></div>
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="MagistrTheOne"
        className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-lg relative z-10"
      />
    </div>
    <div className="max-w-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        Hello, I’m MagistrTheOne 👋
      </h2>
      <p className="text-lg text-gray-300 mb-2">
        Fullstack developer. I create modern, fast and adaptive web applications on the current stack.
      </p>
      <p className="text-gray-400">
        I love clean code, automation and new technologies. Open to interesting projects and cooperation!
      </p>
    </div>
  </section>
);

export default About;