import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 py-6 mt-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
      <span className="text-gray-400 text-sm">
        © {new Date().getFullYear()} MagistrTheOne. All rights reserved.
      </span>
      <div className="flex space-x-4">
        <a
          href="https://github.com/MagistrTheOne"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
        </a>
        <a
          href="https://t.me/MagistrTheOne"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white transition"
          aria-label="Telegram"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.964 16.568c-.39 0-.322-.147-.456-.518l-1.14-3.755 8.788-5.2"/>
            <path d="M9.964 16.568c.298 0 .429-.137.597-.302l1.6-1.556-2.001-1.217"/>
            <path d="M9.964 16.568c.23 0 .332-.084.464-.18l2.792-2.03 3.86 2.82c.53.29.91.14 1.04-.49l1.89-8.86c.19-.82-.31-1.14-.83-.94l-15.1 5.8c-.82.32-.81.77-.14.97l3.87 1.21 8.98-5.67"/>
          </svg>
        </a>
        <a
          href="mailto:magistrtheone@gmail.com"
          className="text-cyan-400 hover:text-white transition"
          aria-label="Email"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;