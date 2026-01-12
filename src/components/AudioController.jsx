import React, { useState, useRef } from 'react';
import './AudioController.css';

const AudioController = () => {
    const [isMuted, setIsMuted] = useState(true);
    // Placeholder audio ref - User to add src later or we can add a dummy file
    const audioRef = useRef(new Audio(''));

    const toggleAudio = () => {
        // Logic for toggling mute would go here
        // For now purely visual as requested "volume icon that when clicked becomes mute"
        setIsMuted(!isMuted);
    };

    return (
        <div className="audio-controller" onClick={toggleAudio}>
            {isMuted ? (
                // Mute Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
            ) : (
                // Volume Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
            )}
            <span className="audio-text">{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
        </div>
    );
};

export default AudioController;
