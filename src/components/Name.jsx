import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Name = (props) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders" style={{width:"100%"}}>
                <List sx={{
                        width:'100%',
                    }}>

                    <ListItem disablePadding sx={{
                        width:'100%',
                    }}>
                        <ListItemButton sx={{
                        width:'100%',
                    }}>
                            <ListItemText primary={props.name}  sx={{
                        width:'100%',
                    }}/>
                        </ListItemButton>
                    </ListItem>

                </List>
            </nav>
        </Box>
    );
}

export default Name