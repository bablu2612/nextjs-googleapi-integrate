import React from 'react';
import Head from 'next/head'
import SearchBox from '../../components/home/searchbox';
import { Box } from '@mui/material';


const HomePage = () => {
    const styling: any = {
        backgroundImage: "url('https://picsum.photos/200')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        height: "500px",
        width: "100%"
    }

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Box style={styling}>

            <Box>
                <SearchBox />
            </Box>
            </Box>

        </>
    )
}
export default HomePage;