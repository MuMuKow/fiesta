import React from 'react';
import GoogleMapReact from 'google-map-react';
import dayFormat from '../../../dayFormat';

import usePinData from '../usePinData';

import './SimpleMap.css'

import Pin from './Pin'

function SimpleMap(props) {

  const InitialPos = {
    center: {
      lat: 34.413,
      lng: -119.859
    },
    zoom: 15.3
  };

  const pinData = usePinData()

  const pindata = pinData.map((pin, index) => <Pin
    key={index}
    alt={index}
    
    lat={pin.location.latitude}
    lng={pin.location.longitude}
    party={pin.party}
    img={pin.img}
    rating={pin.rating}
    date={dayFormat(pin.date.toDate())}
    user={pin.user}
    address={pin.address}

    eventNum={props.eventNum}
    setEventNum={props.setEventNum}
  />)

  return (
    <div className="map-general">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={InitialPos.center}
        defaultZoom={InitialPos.zoom}
      >
        {pindata}
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap;