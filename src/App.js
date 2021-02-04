import React, {useState, useRef} from "react";
//Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
//Import Styles
import './styles/app.scss';
//Import Data
import data from './data';
import {motion, AnimatePresence} from 'framer-motion';


function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    isLoaded: false,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [isChanged, setIsChanged] = useState(true);
  //Event Handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage:animation})
  };
  const songEndHandler = async () => {
    //get the index of the current song
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    //set the next song
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  };
  return (
    <div className={`App ${libraryStatus ? "library-active": ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song isChanged={isChanged} setIsChanged={setIsChanged} isPlaying={isPlaying} currentSong={currentSong} />
      <Player isChanged={isChanged} setIsChanged={setIsChanged} setSongs={setSongs} songs={songs} setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Library libraryStatus={libraryStatus} setSongs={setSongs} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={ timeUpdateHandler } ref={ audioRef } src={ currentSong.audio } onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
