import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong setSongs={setSongs} songs={songs} setCurrentSong={setCurrentSong} song={song} id={song.id} key={songs.id} audioRef={audioRef} isPlaying={isPlaying} />
                ))}
            </div>
        </div>
    );
};

export default Library;
