import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const Song = ({currentSong, isPlaying, isChanged, setIsChanged}) => {
    
    return(
        <div className="song-wrapper">
            <div className="song-bg" style={{backgroundImage : `url(${currentSong.cover})`}}></div>
            <div className="song-container">
                <div className={`border-rotate ${isPlaying ? 'start-rotate-cover' : 'pause-rotate-cover'}`}>
                    <img className={`${isPlaying ? 'start-rotate-cover' : 'pause-rotate-cover'}`} alt={currentSong.name} src={currentSong.cover}/>
                </div>
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    );
}

export default Song;