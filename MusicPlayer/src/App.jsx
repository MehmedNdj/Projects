import React, { useState } from 'react';
import './App.css';
import NavBar from './Nav';
import MusicCard from './Cards';
import Converter from './Converter';
import Displayer from './Displayer';
import Playlist from './Playlist';
import Creator2 from './CreatePlaylist';

function App() {
  const [playlist, setPlaylist] = useState([]);
  
  const handleSavePlaylist = (newFiles) => {
      // Convert FileList to an array of File objects
      const filesArray = Array.from(newFiles);
      // Extract only the name property from each File object
      const fileNamesArray = filesArray.map(file => ({ name: file.name }));
      // Create a new playlist with the array of file objects
      console.log("New playlist files:", fileNamesArray); // Add this line
      setPlaylist(prevPlaylist => [...prevPlaylist, fileNamesArray]);
    }
      
  return (
    <div>
      <div>
        <NavBar />
        <h1 className='title'>Converter</h1>
      </div>
      <div className='converter'>
        <h2>Your favorite music and converter , <br></br> all in one place</h2><br></br>
        <Converter />
      </div>
      <div className='musicwrapper'>
        <h1 className='title'>Music Player</h1>
        <div className='cardwrapper'>
          <MusicCard />
        </div>
        <div className='displayer'>
          <Displayer />
        </div>
      </div>
      <div>
        <h1 className='title'>Playlists</h1>
        <div className='playlist-view'>
          <Creator2 onSavePlaylist={handleSavePlaylist} />
          {playlist.map((playlist, index) => (
          <Playlist key={index} playlist={playlist} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
