import * as React from 'react';
import Button from '@mui/material/Button';
import { Menu, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ReorderIcon from '@mui/icons-material/Reorder';

interface Iprops {
  arryData: string[];
}

export default function FadeMenu(props: Iprops) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="main_div_menu_class_mobile">
      <IconButton onClick={(e) => handleClick(e)}>
        <ReorderIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        classes={{ paper: "mobile_menu_paper" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {props?.arryData?.map((value, index) => (
          <MenuItem onClick={handleClose} key={index + 1}>{value}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}