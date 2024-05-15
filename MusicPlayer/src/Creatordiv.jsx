// CreatePlaylist.js
import React, { useRef } from 'react';
import './Creatordiv.css';

function Create({ onSavePlaylist }) {
  const fileInput = useRef();

  const handleSave = (event) => {
    event.preventDefault();
    const files = fileInput.current.files;
    // Ensure onSavePlaylist is a function before calling it
    if (typeof onSavePlaylist === 'function') {
      // Call onSavePlaylist function with uploaded files
      onSavePlaylist(files);
    }
  };

  return (
    <div className='crdiv'>
      <h2>Create your playlist</h2>
      <form onSubmit={handleSave}>
        <input type="file" multiple ref={fileInput} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Create;