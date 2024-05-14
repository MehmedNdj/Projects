import './Playlist.css';


function Playlist({ playlist }) {
    console.log("Playlist prop:", playlist); // Add this line
    return (
      <div className="playlistcard">
        <div>
          <h2>Playlist</h2>
          <ul>
            {playlist.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  

export default Playlist;