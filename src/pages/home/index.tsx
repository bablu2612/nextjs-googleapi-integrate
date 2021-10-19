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
    height: 500px;
    width: 100%;
`;

const HomePage: NextPage = (props) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <HomeStyle>
                <Box component="div">
                    <SearchBox />
                </Box>
            </HomeStyle>
        </>
    )
}

export default HomePage;