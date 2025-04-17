import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Spotify Clone</h1>
            <p className="text-lg mb-8">Discover your favorite tracks and albums.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Here you can map through your tracks and albums */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Track Title</h2>
                    <p>Artist Name</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Track Title</h2>
                    <p>Artist Name</p>
                </div>
                {/* Add more tracks/albums as needed */}
            </div>
        </div>
    );
};

export default Home;