import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Map from '../../components/details/Mapnew';
import Image from '../../components/details/Image';
import Grid from '@mui/material/Grid';
import Contact from '../../components/details/Contact';
import DetailStyles from '../../components/details/DetailStyles';
import ImageDetail from '../../components/details/ImageDetail';
import Box from '@mui/material/Box';
import Contentright from '../../components/details/Contentright';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import type { NextPage } from 'next';
import { connect } from 'react-redux';
import { getSearch } from '../../Redux/Actions/Site';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { getSiteDetail } from '../../Redux/Actions/siteDetail';

interface IProps {
    siteSearch: (data: string) => void;
    siteData: any;
    siteDetail: any;
    siteDetailApi: (siteId: string) => void;
}
interface StyleProps {
    image?: string;
}
const ImageStyle = styled.div<StyleProps>` 
        background: ${props => `url(${props?.image})`};
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 150px;
        width: 300px;
`;

const Detail: NextPage<IProps> = (props) => {
    const router = useRouter();


    useEffect(() => {
        if (router?.query?.siteId) {
            props?.siteDetailApi(String(router?.query?.siteId));
        }
    }, [router?.query, props?.siteData?.[0]?.id])
    console.log("contents", props?.siteData, props?.siteDetail)
    return (
        <>
            <Head>
                <title>Details</title>
            </Head>

            <DetailStyles>
                <Box className="container">
                    <Grid className="image-mage" item xs={12}>
                        <ImageStyle image={props?.siteDetail ? props?.siteDetail?.siteImageUrl : "https://picsum.photos/200"}>
                            <p className="melmo-text">Malmo Citykajak</p>
                        </ImageStyle>
                        <ImageDetail
                            typeOfProducts={props?.siteDetail?.typeOfProducts}
                            amenities={props?.siteDetail?.amenities}
                            text={props?.siteDetail?.text ? props?.siteDetail?.text : "lorum picsum is very good site"}
                        />
                    </Grid>
                    <Grid className="map-section" item xs={12} >
                        <Map
                            latitude={props?.siteDetail ? props?.siteDetail?.latitude : 38.850033}
                            longitude={props?.siteDetail ? props?.siteDetail?.longitude : -98.6500523}
                        />
                        <Contact
                            address={props?.siteDetail?.address}
                            phone={props?.siteDetail?.phone}
                            webUrl={props?.siteDetail?.webbUrl ? props?.siteDetail?.webbUrl : "https://www.google.com"}
                            email={props?.siteDetail?.email ? props?.siteDetail?.email : "abc@gmail.com"}
                            openHours={props?.siteDetail?.openHours}
                        />

                    </Grid>
                    <Grid className="detail-section-content" item xs={12}>
                        <Contentright seotext={props?.siteDetail?.seotext ? props?.siteDetail?.seotext : "no test available"} />

                    </Grid>
                </Box>
            </DetailStyles>
        </>
    )
}
const mapStateToProps = (state: any) => ({
    siteDetail: state?.siteDetailData?.siteDetailData
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    siteDetailApi: bindActionCreators(getSiteDetail, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
