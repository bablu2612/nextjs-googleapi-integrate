import * as React from 'react';
import Box from '@mui/material/Box';
import HeaderStyles from './headerStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



const Header = () => {

    return (
        <HeaderStyles>
        <Box className="container">
            <Box className="headerSection">
                <Box className="logo">
                    <img src="/logo-gokaya.png" alt="logo" height={"50px"} width={"100px"} />
                </Box>
                <List
                    className="navbar"
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    aria-label="contacts"
                >
                    <ListItem className="firstli" disablePadding>
                        <ListItemButton>
                            <ListItemText primary="How it works" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className="secondli"  disablePadding>
                        <ListItemButton>
                            <ListItemText inset primary="Partners" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className="thiredli" disablePadding>
                        <ListItemButton>
                            <ListItemText inset primary="For businesses" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className="forthli" disablePadding>
                        <ListItemButton>
                            <ListItemText inset primary="About us" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className="fiveli"  disablePadding>
                        <ListItemButton>
                            <ListItemText inset primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            </Box>
           
        </HeaderStyles >
    )
}
export default Header;