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

function MusicCard({ playlist = [] }) {
  const { selectedItem, setSelectedItem } = useSelectedItem();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (selectedItem && playlist.length > 0) {
      const newIndex = playlist.findIndex(item => item.name === selectedItem);
      if (newIndex !== -1) {
        setCurrentIndex(newIndex);
      }
    }
  }, [selectedItem, playlist]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentIndex(newIndex);
    setSelectedItem(playlist[newIndex].name);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(newIndex);
    setSelectedItem(playlist[newIndex].name);
  };

  useEffect(() => {
    if (selectedItem) {
      const fileName = selectedItem.endsWith('.mp3') ? selectedItem.slice(0, -4) : selectedItem;
      const audioUrl = `/${fileName}.mp3`;

      audioRef.current.src = audioUrl;

      audioRef.current.onerror = () => {
        console.error(`Failed to load audio file: ${audioUrl}`);
      };

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
            
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IconButton aria-label="previous" size="large" onClick={handlePrevious} disabled={playlist.length === 0}>
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="play/pause" size="large" onClick={handlePlayPause} disabled={!selectedItem}>
            {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
          </IconButton>
          <IconButton aria-label="next" size="large" onClick={handleNext} disabled={playlist.length === 0}>
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 250, height: '100%', objectFit: 'cover' }}
        image="/src/assets/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default MusicCard;
