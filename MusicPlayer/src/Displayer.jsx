import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style, data } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={data[index].name} />
      </ListItemButton>
    </ListItem>
  );
}

function Displayer({ selectedPlaylist }) {
  const data = selectedPlaylist || [];

  return (
    <Box>
      <FixedSizeList
        height={400}
        width={750}
        itemSize={46}
        itemCount={data.length}
        overscanCount={5}
        itemData={data}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}

export default Displayer;
