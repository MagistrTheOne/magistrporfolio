import React from 'react';

const Header = () => (
  <header className="bg-gray-900 shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <span className="text-2xl font-bold text-cyan-400">MagistrTheOne</span>
      <nav className="space-x-4 text-sm sm:space-x-6">
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#skills" className="hover:text-cyan-400 transition">TechStack</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contacts</a>
      </nav>
    </div>
  </header>
);

export default Header;