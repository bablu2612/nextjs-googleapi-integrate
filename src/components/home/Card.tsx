import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

interface Iprops {
    name: string;
    address: string;
}
export default function MediaCard(props:Iprops) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Box className="image">
            <CardMedia
                component="img"
                height="140"
                image="/kayaking.jpeg"
                alt="green iguana"
            />
            <Typography gutterBottom variant="h5" component="div">
                    {props?.name}
                </Typography>
                </Box>
            <CardContent>
               <div className="rightText">
               
                <Box className="map-location">
                <RoomIcon />
                {props?.address}
            </Box>
               </div>               
                <div className="leftSec">
                <div className="produkter" >
                    <img src="/paddle-board.png" width="50px" height="50px" />
                    <div>SUP</div>
                </div>
                <div className="produkter">
                    <img src="/kayak.png" width="50px" height="50px" />
                    <div>KAYAK</div>
                </div>

                </div>
            </CardContent>
            
        </Card>
    );
}