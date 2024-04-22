import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function MusicCard() {
  return (
    <Card sx={{ display: 'flex', width: '600px', height: '300px' }}>
      {/* Left section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
        <CardContent>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {/* Middle section */}
          <IconButton aria-label="previous" size="large">
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="play/pause" size="large">
            <PlayArrowIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="next" size="large">
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      {/* Right section */}
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
