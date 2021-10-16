import type { NextPage } from 'next'
import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { getMovies } from '../Redux/Actions/moviesAction';
import { getSearch } from '../Redux/Actions/Site';
import { getLocation } from '../Redux/Actions/siteLocation';
import { getSiteDetail } from '../Redux/Actions/siteDetail';
import HomePage from './home';

interface IProps {
  updateAnnouncement: any;
  siteSearch: any;
  siteLocationApi: (lat: number, lng: number) => void;
  siteDetailApi: (siteId: string) => void;
  value: any
}
const Home: NextPage<IProps> = (props) => {

  useEffect(() => {
    //props?.updateAnnouncement();
    props?.siteSearch("CL");
    props?.siteLocationApi(23.45, 13.45);
    props?.siteDetailApi('aZ5X7HZdidsCcOZlsyOM');
  }, [])

  console.log(props);
  return (
    <div className="container">
      <Head>
        <title>home</title>
      </Head>
      <HomePage />
    </div>
  )
}
const mapStateToProps = (state: any) => ({
  value: state,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  updateAnnouncement: bindActionCreators(getMovies, dispatch),
  siteSearch: bindActionCreators(getSearch, dispatch),
  siteLocationApi: bindActionCreators(getLocation, dispatch),
  siteDetailApi: bindActionCreators(getSiteDetail, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


