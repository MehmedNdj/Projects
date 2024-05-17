import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import './Converter.css';
import mp3 from './assets/mp3.png';
import down from './assets/down.png';
import { fetch } from './services/ApiRequests';

function Converter() {
  const [link, setLink] = useState('');
  const [response, setResponse] = useState(null);

  const handleFetch = async () => {
    if (link) {
      try {
        const res = await fetch(link);
        setResponse(res.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  const handleDownload = () => {
    if (response && response.dlink) {
      window.location.href = response.dlink;
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      onSubmit={(e) => e.preventDefault()}
    >
      <IconButton className='b1'>
        <img src={mp3} alt="mp3-icon" className='mp3' />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Place your URL here"
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
        }}
      />
      <IconButton onClick={handleFetch}>
        <img src={down} alt="down-icon" className='down' />
      </IconButton>
      {response && response.dlink && (
        <IconButton onClick={handleDownload}>
          <img src={down} alt="down-icon" className='down' />
        </IconButton>
      )}
    </Paper>
  );
}

export default Converter;