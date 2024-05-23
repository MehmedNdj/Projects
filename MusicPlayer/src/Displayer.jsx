import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { useSelectedItem } from './services/SelectedItemContext';
import './Displayer.css';

function renderRow(props) {
  const { index, style, data, onItemClick } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => onItemClick(data[index].name)}>
        <ListItemText primary={data[index].name} />
      </ListItemButton>
    </ListItem>
  );
}

function Displayer({ selectedPlaylist }) {
  const { setSelectedItem } = useSelectedItem();
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
        {props => renderRow({ ...props, onItemClick: setSelectedItem })}
      </FixedSizeList>
    </Box>
  );
}

export default Displayer;
