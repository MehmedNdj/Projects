import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import './Converter.css';
import mp3 from './assets/mp3.png';
import down from './assets/down.png';

function Converter() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton >
        <button className='b1'><img src={mp3} alt="mp3-icon" className='mp3'/></button>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Place your URL here"
        inputProps={{ }}
      />
      <IconButton >
        <button className='b2'><img src={down} alt="down-icon" className='down'/></button>
      </IconButton>
    </Paper>
  );
}

export default Converter;