import React, { useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useSelectedItem } from './services/SelectedItemContext';

function MusicCard() {
  const { selectedItem } = useSelectedItem();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (selectedItem) {
      // Remove the .mp3 extension from the selectedItem if it exists
      const fileName = selectedItem.endsWith('.mp3') ? selectedItem.slice(0, -4) : selectedItem;
      const audioUrl = `/${fileName}.mp3`; // Update this line
    
      // Assign the URL to the src attribute of the audio element
      audioRef.current.src = audioUrl;
    
      // Handle the error event
      audioRef.current.onerror = () => {
        console.error(`Failed to load audio file: ${audioUrl}`);
      };
    
      // Try to play the audio file
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error(`Error while trying to play audio file: ${error}`);
      });
    }
  }, [selectedItem]);

  return (
    <Card sx={{ display: 'flex', width: '600px', height: '300px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {selectedItem || 'Live From Space'}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IconButton aria-label="previous" size="large">
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="play/pause" size="large" onClick={handlePlayPause}>
            {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
          </IconButton>
          <IconButton aria-label="next" size="large">
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 250, height: '100%', objectFit: 'cover'}}
        image="/src/assets/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default MusicCard;