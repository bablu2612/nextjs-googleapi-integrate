import React from 'react';
import { Box } from '@mui/material';

const Image = () => {
    const styling: any = {
        backgroundImage: "url('https://picsum.photos/200')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        height: "150px",
        width: "300px",
    }
    return (
        <Box className="malmo-image" style={styling}>
            <p className="melmo-text">Malmo Citykajak</p>
        </Box>
    )
}
export default Image;