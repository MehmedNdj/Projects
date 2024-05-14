// CreatePlaylist.js
import React from 'react';
import './Creatordiv.css';

function Create({ onSavePlaylist }) {
  const handleSave = (event) => {
    const files = event.target.files;
    // Ensure onSavePlaylist is a function before calling it
    if (typeof onSavePlaylist === 'function') {
      // Call onSavePlaylist function with uploaded files
      onSavePlaylist(files);
    }
  };

  return (
    <div className='crdiv'>
      <h2>Create your playlist</h2>
      {/* Attach onChange event to input */}
      <input type="file" multiple onChange={handleSave} />
      <button>Save</button>
    </div>
  );
}

export default Create;
