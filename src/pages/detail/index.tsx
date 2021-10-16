import React from 'react';
import Head from 'next/head'
import Map from '../../components/details/map';
import Image from '../../components/details/image';
import Grid from '@mui/material/Grid';
import Contact from '../../components/details/contact';
import Content from '../../components/details/content';
import DetailStyles from '../../components/details/detailStyles';
import ImageDetail from '../../components/details/imageDetail';
import Box from '@mui/material/Box';
import Contentright from '../../components/details/contentright';


const Detail = () => {
    return (
        <>
            <Head>
                <title>Details</title>
            </Head>
            <DetailStyles>
                <Box className="container">
                <Grid className="image-mage"  item xs={12}>
                    <Image />
                   <ImageDetail />

              </Grid>
                <Grid className="map-section" item xs={12} >
                    <Map />
                    <Contact />

                </Grid>
                    <Grid className="detail-section-content" item xs={12}>
                    <Content />
                     <Contentright />

                    </Grid>
                </Box>
            </DetailStyles>
        </>
    )
}
export default Detail;