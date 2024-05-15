import './Playlist.css';


function Playlist({ playlist }) {
  const firstFive = playlist.slice(0, 5);

  return (
      <div className="playlistcard">
        <div>
          <h2>Playlist</h2>
          <ul>
            {firstFive.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  

export default Playlist;

