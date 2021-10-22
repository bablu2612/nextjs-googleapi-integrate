import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import classNames from 'classnames';
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, Button } from '@mui/material';
import HeaderWork from './headerStyles';

const Header = () => {
    const arryData = ["How it works", "Partners", "For businesses", "About us", "Contact"];
    const [AddClass, setAddClass] = React.useState<Boolean>(false);
    return (
        <Box className="container">
            <HeaderWork>
                <Box className="Header_section-mains">
                    <Box className="logo">
                        <a href="/"> <img src="/logo-gokaya.png" alt="logo" height={"50px"} width={"100px"} /></a>
                    </Box>
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            {AddClass ?
                                <button type="button" className="close" data-toggle="collapse" onClick={() => setAddClass(false)}>X</button>
                                :
                                <IconButton type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" onClick={() => setAddClass(true)}>
                                    <ReorderIcon />
                                </IconButton>
                            }
                        </div>
                        <div className={classNames("collapse navbar-collapse", { 'open_collapse_nav': AddClass, " ": !AddClass })} id="navbar-collapse-1">
                            <List
                                className="navbar"
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                aria-label="contacts"
                            >
                                {arryData?.map((value, index) => (
                                    <ListItem className={`list` + index} disablePadding key={index + 1}>
                                        <ListItemButton>
                                            <ListItemText inset primary={value} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                <ListItem className="book_now button">
                                    <Button onClick={() => console.log("book now")}>Book Now</Button>
                                </ListItem>
                            </List>
                        </div>
                    </nav>
                </Box>
            </HeaderWork>
        </Box>
    )
}
export default Header;