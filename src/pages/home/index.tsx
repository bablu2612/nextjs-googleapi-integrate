import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import SearchBox from '../../components/home/searchbox';
import { Box } from '@mui/material';
import type { NextPage } from 'next';
import styled from 'styled-components';


const HomeStyle = styled.div`
    background-image: url('/kayaking.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    background-position: 0 -280px;
`;

const HomePage: NextPage = (props) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <HomeStyle>
                <Box component="div" className="home-banner-sec">
                    <h1>Find your next kynak here is description</h1>
                    <SearchBox />
                </Box>
            </HomeStyle>
        </>
    )
}

export default HomePage;