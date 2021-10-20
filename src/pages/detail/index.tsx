import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Map from '../../components/details/Mapnew';
import Image from '../../components/details/Image';
import Grid from '@mui/material/Grid';
import Contact from '../../components/details/Contact';
import Content from '../../components/details/Content';
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
        // background: ${props => `url(${props?.image})`};
        background: ${props => `url(/kayaking.jpeg)`};

        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 150px;
        width: 300px;
`;

const Detail: NextPage<IProps> = (props) => {
    const router = useRouter();

    const [contents, setContents] = useState<any>(null);

    useEffect(() => {
        if (router?.query?.name) {
            props?.siteSearch(String(router?.query?.name));
        }
        if (props?.siteData?.[0]?.id) {
            props?.siteDetailApi(props?.siteData?.[0]?.id);
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
                        <ImageStyle image={props?.siteData?.length > 0 ? props?.siteData?.[0]?.siteImageUrl : "https://picsum.photos/200"}>
                            {/* <Box component="div" className="malmo-image"> */}
                            <p className="melmo-text">Malmo Citykajak</p>
                            {/* </Box> */}
                        </ImageStyle>
                        <ImageDetail />
                    </Grid>
                    <Grid className="map-section" item xs={12} >
                        <Map
                            latitude={props?.siteData?.length > 0 ? props?.siteData?.[0]?.latitude : 38.850033}
                            longitude={props?.siteData?.length > 0 ? props?.siteData?.[0]?.longitude : -98.6500523}
                        />
                        <Contact address={props?.siteDetail?.address} />

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
const mapStateToProps = (state: any) => ({
    siteData: state?.siteData?.siteData,
    siteDetail: state?.siteDetailData?.siteDetailData
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    siteSearch: bindActionCreators(getSearch, dispatch),
    siteDetailApi: bindActionCreators(getSiteDetail, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
