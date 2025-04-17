# Spotify Clone

This project is a Spotify clone built using React 19.0 and Tailwind CSS 4.0. It aims to replicate the core functionalities of a music streaming application, allowing users to browse and play music tracks.

## Project Structure

The project is organized as follows:

```
spotify-clone
├── src
│   ├── components
│   │   └── Player.tsx        # Component for music playback controls
│   ├── pages
│   │   └── Home.tsx          # Main page displaying available tracks and albums
│   ├── assets                 # Folder for static files (images, icons)
│   ├── App.tsx               # Root component defining routing and structure
│   ├── main.tsx              # Entry point rendering the App component
│   └── index.css             # Styles for the application, including Tailwind CSS
├── public
│   └── index.html            # Main HTML document with the root element
├── tailwind.config.js        # Configuration for Tailwind CSS
├── package.json              # npm configuration file with dependencies and scripts
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Features

- **Music Playback**: The `Player` component allows users to play, pause, and switch tracks.
- **Track Listing**: The `Home` component displays a list of available tracks and albums.
- **Responsive Design**: The application is styled using Tailwind CSS for a modern and responsive UI.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd spotify-clone
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.