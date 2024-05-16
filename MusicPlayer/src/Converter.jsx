import { useState, useEffect } from 'react';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import './Converter.css';
import mp3 from './assets/mp3.png';
import down from './assets/down.png';
import { fetch } from './services/ApiRequests';


function Converter() {
  const [link , setLink] = useState('')
  const [id, setId] = useState(null);
  const [response, setResponse] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchData = () => {
          let inteval = setInterval(async function (){
            const res = await fetch(id); 

            if (res.data.status === 200 && res.data.status === "ok") {
                setResponse(res.data);
                clearInterval(inteval);
            }

          }, 1000)
      }
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (response) {
      window.location.href = response.link;
    }
  }, [response]);


  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton className='b1'><img src={mp3} alt="mp3-icon" className='mp3'/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Place your URL here"
        inputProps={{ }}
        value={link}
        onChange = {(e) => {
          setLink(e.target.value);
        }}
      />
      <IconButton onClick={() =>{
          const text = link.split("=")[1];
          if (text) {
            setId(text);
          }
        }}>
          <img src={down} alt="down-icon" className='down'/>
      </IconButton>
    </Paper>
  );
}

export default Converter;