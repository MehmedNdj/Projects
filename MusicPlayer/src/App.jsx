import React, { useState } from 'react';
import './App.css';
import NavBar from './Nav';
import MusicCard from './Cards';
import Converter from './Converter';
import Displayer from './Displayer';
import Playlist from './Playlist';
import Creator2 from './CreatePlaylist';

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handleSavePlaylist = (newFiles) => {
    const filesArray = Array.from(newFiles).map(file => ({ name: file.name }));
    setPlaylists(prevPlaylists => [...prevPlaylists, filesArray]);
  };

  const handleFileClick = (playlist) => {
    setSelectedPlaylist(playlist);
  };

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
        <h1 className='title'>Music Player</h1>
      <div className='musicwrapper'>
        <div className='cardwrapper'>
          <MusicCard />
        </div>
        <div className='displayer'>
          <Displayer selectedPlaylist={selectedPlaylist} />
        </div>
      </div>
      <div>
        <h1 className='title'>Playlists</h1>
        <div className='playlist-view'>
          <Creator2 onSavePlaylist={handleSavePlaylist} />
          {playlists.map((playlist, index) => (
            <Playlist key={index} playlist={playlist} onFileClick={() => handleFileClick(playlist)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
