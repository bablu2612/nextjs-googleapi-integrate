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

interface IProps {
    siteSearch: (data: string) => void;
    value: any
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

    const [contents, setContents] = useState<any>(null);

    useEffect(() => {
        if (router?.query?.name) {
            props?.siteSearch(String(router?.query?.name));
            //setContents(props?.value?.siteData)
            // if (props?.value?.length > 0) {
            //     setContents(props?.value);
            // }
        }
    }, [router?.query])
    console.log("contents", props?.value?.siteData)


    return (
        <>
            <Head>
                <title>Details</title>
            </Head>

            <DetailStyles>
                <Box className="container">
                    <Grid className="image-mage" item xs={12}>
                        <ImageStyle image={props?.value?.siteData?.length > 0 ? props?.value?.siteData?.[0]?.siteImageUrl : "https://picsum.photos/200"}>
                            {/* <Box component="div" className="malmo-image"> */}
                            <p className="melmo-text">Malmo Citykajak</p>
                            {/* </Box> */}
                        </ImageStyle>
                        <ImageDetail />
                    </Grid>
                    <Grid className="map-section" item xs={12} >
                        <Map
                            latitude={props?.value?.siteData?.length > 0 ? props?.value?.siteData?.[0]?.latitude : 38.850033}
                            longitude={props?.value?.siteData?.length > 0 ? props?.value?.siteData?.[0]?.longitude : -98.6500523}
                        />
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
const mapStateToProps = (state: any) => ({
    value: state?.siteData,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    siteSearch: bindActionCreators(getSearch, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
