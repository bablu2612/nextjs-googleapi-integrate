import React from 'react';
import { Box } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <><Box className="map-details">
            <Box className="map-location">
                <RoomIcon />
                Bondegatan 8,Malmo
            </Box>
            <Box className="map-combine-data">
            <Box className="map-deta">
                <span className="Oppettider">Oppettider:</span><br />
                <span className="Oppettider1">Mon-Fre:09.00-18.00</span><br />
                <span className="Oppettider2">lor-Son:10.00-18.00</span>
            </Box>
            <Box className="map-email-detail">
                <LanguageIcon />
                <a href="#">Emisuthyrning.se</a><br />
                <PhoneIcon />
                <a href="#">0702929275</a><br />
                <EmailIcon />
                <a href="#">Emiljonsson1992@gmail.com</a><br />
            </Box>
            </Box>
            </Box>
        </>
    )
}
export default Contact;