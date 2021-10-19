import { compose, withProps } from 'recompose';
import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

interface Iprops {
  latitude: number;
  longitude: number;
}
// Map component on dashboard page
const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyB7zK2NBzkXIbwqYu0E4F4TBSvH6a8T3QI&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div className="my_self" style={{ height: `100%` }} />,
    containerElement: (
      <div className="hello_my_name" style={{ height: `400px` }} />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,

)((props: any) => {
  const { latitude, longitude } = props;
  return (
    <>
      <div className="map_div">
        <div className="google_map">
          <GoogleMap
            defaultZoom={10}
            options={{ gestureHandling: "cooperative" }}
            center={{ lat: props['latitude'], lng: props?.latitude }}
          >
            <Marker
              position={{ lat: props['latitude'], lng: props?.latitude }}
              //icon={val.Stats.Status === 0 ? "/images/icons/icon-status-running.png" : val.Stats.Status === 1 ? "/images/icons/icon-status-standby.png" : "/images/icons/icon-status-off.png"}
              onClick={() => {

              }}
            />
          </GoogleMap>
        </div>
      </div>
    </>
  )
});

const MapContainer = (props: Iprops) => {
  return (
    <div className="map-class" style={{ height: '40vh', width: '50%' }}>
      <MyMapComponent {...props} />
    </div>
  )
}
export default MapContainer;