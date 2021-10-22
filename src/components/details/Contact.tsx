import React from 'react';
import { Box } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

interface Iprops {
    address: string;
    phone: string;
    webUrl: string;
    email: string;
    openHours: number;
}

const Contact: React.FC<Iprops> = ({ address, email, phone, webUrl }) => {
    return (
        <><Box className="map-details">
            <Box className="map-location">
                <RoomIcon />
                {address}
            </Box>
            <Box className="map-combine-data">
                <Box className="map-deta">
                    <span className="Oppettider">Oppettider:</span><br />
                    <span className="Oppettider1">Mon-Fre:09.00-18.00</span><br />
                    <span className="Oppettider2">lor-Son:10.00-18.00</span>
                </Box>
                <Box className="map-email-detail">
                    <LanguageIcon />
                    <a href="#">{webUrl}</a><br />
                    <PhoneIcon />
                    <a href="#">{phone}</a><br />
                    <EmailIcon />
                    <a href="#">{email}</a><br />
                </Box>
            </Box>
        </Box>
        </>
    )
}
export default Contact;