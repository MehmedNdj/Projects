import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

function Displayer() {
  return (
    <Box>
      <FixedSizeList
        height={400}
        width={750}
        itemSize={46}
        itemCount={20}
        overscanCount={5}
        marginTop={10}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}

export default Displayer;
