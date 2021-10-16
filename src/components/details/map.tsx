import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';
const AnyReactComponent = ({ text }:any) => <RoomIcon style={{fill: "red"}}/>
const Map = () => {
    
    const [center,setCenter]=useState({
        lat: 30.733315,
        lng: 76.779419
      })
      const[zoom,setzoom]=useState(11)
      const[lat,setlat]=useState(30.733315)
      const[log,setlong]=useState(76.779419)

      
    return (
        <>
            <div className="map-class"style={{ height: '40vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB7zK2NBzkXIbwqYu0E4F4TBSvH6a8T3QI' }}
          defaultCenter={center}
          yesIWantToUseGoogleMapApiInternals={true}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={lat}
            lng={log}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        </>
    )
}
export default Map;


















