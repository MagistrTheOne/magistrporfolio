import React, { useState } from 'react';

const Player: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<string | null>(null);

    const playTrack = (track: string) => {
        setCurrentTrack(track);
        setIsPlaying(true);
        // Logic to play the track
    };

    const pauseTrack = () => {
        setIsPlaying(false);
        // Logic to pause the track
    };

    const nextTrack = () => {
        // Logic to switch to the next track
    };

    return (
        <div className="player">
            <h2>Now Playing: {currentTrack || 'Select a track'}</h2>
            <div className="controls">
                <button onClick={pauseTrack}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={nextTrack}>Next</button>
            </div>
        </div>
    );
};

export default Player;