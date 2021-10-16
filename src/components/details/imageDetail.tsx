import React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';


const ImageDetail = () => {
    return (
        <>
        <Box className="image-details">
            <Box>
                <span className="produkter">Produkter:</span>
            </Box>
            <br />
            <p className="lorem">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            </p>
            <Box className="belvam">
                <span className="belvamlighter">Belvamligheter:</span>
                <Button className="button1" >Wifi</Button>
                <Button className="button1" >Parkering</Button>
                <Button className="button1" >Parkering</Button>
                <Button className="button1 buttonwifi" >Wifi</Button>
                <Button className="button1 buttonwifi" >Wifi</Button>
                <Button className="button1 buttonwifi" >Toalett</Button>
            </Box>
            </Box>
        </>
    )
}
export default ImageDetail;