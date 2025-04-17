import React from 'react';

const Contact = () => (
  <section id="contact" className="container mx-auto py-16 px-6">
    <h2 className="text-2xl font-bold mb-8 text-center">Контакты</h2>
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 max-w-xl mx-auto shadow-lg">
      <p className="mb-4 text-gray-300 text-center">
        Ready to cooperation. I am open to interesting projects and cooperation!<br />
        You can contact me via email or through my social media accounts.
      </p>
      <ul className="space-y-2 text-center">
        <li>
          <a
            href="mailto:magistrtheone@gmail.com"
            className="text-cyan-400 hover:underline"
          >
            magistrtheone@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://t.me/MagistrTheOne"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MagistrTheOne"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Contact;