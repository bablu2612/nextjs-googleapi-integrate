import { Box } from '@mui/system';
import React from 'react';

interface IProps {
    seotext: string;
}

const Contentright: React.FC<IProps> = ({ seotext }) => {
    return (
        <>
            <Box className="left-content-content">
                <p className="contrary"><b>{seotext}</b></p>
                <p><b>{seotext}</b></p>
            </Box>
            <Box className="right-content-content">
                <p className="contrart-right"><b>{seotext}</b></p>
                <p><b>{seotext}</b></p>
            </Box>
        </>
    )
}
export default Contentright;