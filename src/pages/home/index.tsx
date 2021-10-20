import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import SearchBox from '../../components/home/searchbox';
import { Box } from '@mui/material';
import type { NextPage } from 'next';
import styled from 'styled-components';
import MediaCard from '../../components/home/Card';
import { Grid } from '@mui/material';
import {geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { getLocation } from '../../Redux/Actions/siteLocation';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { getSearch } from '../../Redux/Actions/Site';
const HomeStyle = styled.div`
.home-banner-sec {
    background-image: url('/kayaking.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    background-position: 0 -280px;
}
`;
interface IProps {
    siteLocationApi: (lat: number, lng: number) => void;
    siteSearch: (name:string) => void;
    value: any;
    siteSearchData:any;
}

const HomePage: NextPage<IProps> = (props) => {
    const router = useRouter();
    const [state, setState] = React.useState<any>({ addresses: "" });

    const handleChange = (address: string) => {
        props?.siteSearch(address);
        getGeoFunction(address);
        setState({ addresses: address });
    };

    const getGeoFunction = async(address:string) =>{
        await geocodeByAddress(address).then(results => getLatLng(results[0])).then(latLng => {
            props?.siteLocationApi(latLng?.lat, latLng?.lng);
        }).catch(error => console.error('Error', error));
    }

    const handleSelect = (address: string) => {
        setState({ addresses: address });
        props?.siteSearch(address)
        getGeoFunction(address);
    };

    const onSearchClick = () => {
        if (state?.addresses !== "") {
            router.push({ pathname: "/detail", query: { name: state?.addresses } })
        }
    }
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <HomeStyle>
                <Box component="div" className="home-banner-sec">
                    <h1>Find your next kynak here is description</h1>
                    <SearchBox handleChange={handleChange} handleSelect={handleSelect} onSearchClick={onSearchClick} state={state} 
                    siteSearchData={props?.siteSearchData}/>
                </Box>
                <Box component= "div" className="main-card">
                    <Grid display="flex" className="innercard">
                        <Grid item xs={3}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={3}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={3}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={3}>
                            <MediaCard />
                        </Grid>
                    </Grid>
                </Box>
            </HomeStyle>
        </>
    )
}
const mapStateToProps = (state: any) => ({
    value: state?.siteLocationData?.siteLocationData,
    siteSearchData: state?.siteData?.siteData
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    siteLocationApi: bindActionCreators(getLocation, dispatch),
    siteSearch: bindActionCreators(getSearch, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);