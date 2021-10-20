import type { NextPage } from 'next'
import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { getSearch } from '../Redux/Actions/Site';
import { getLocation } from '../Redux/Actions/siteLocation';
import { getSiteDetail } from '../Redux/Actions/siteDetail';
import HomePage from './home';

interface IProps {
  siteDetailApi: (siteId: string) => void;
  value: any
}
const Home: NextPage<IProps> = (props) => {

  useEffect(() => {
    //props?.updateAnnouncement();
    // props?.siteSearch("CL");
    props?.siteDetailApi('aZ5X7HZdidsCcOZlsyOM');
  }, [])

  console.log(props);
  return (
    <div className="">
      <Head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7zK2NBzkXIbwqYu0E4F4TBSvH6a8T3QI&libraries=places"></script>
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
  siteDetailApi: bindActionCreators(getSiteDetail, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


