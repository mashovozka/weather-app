import React, {useRef, useState} from 'react';
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {useSelector} from "react-redux";
import classes from './GoogleMap.module.sass';

function Map() {
  const mapRef = useRef();
  const currentLocation = useSelector(state => state.weatherReducer.currentLocationWeather)
  const locations = useSelector(state => state.weatherReducer.otherLocations);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return currentLocation && (
    <GoogleMap
          defaultZoom={1.5}
          defaultCenter={{lat: currentLocation.coord.lat, lng: currentLocation.coord.lon}}
          ref={mapRef}
        >
          <Marker
            position={{lat: currentLocation.coord.lat, lng: currentLocation.coord.lon}}
            onClick={() => {
              setSelectedLocation(currentLocation)
            }}
            icon={{
              url: `https://openweathermap.org/img/w/${currentLocation.weather[0].icon}.png`,
            }}
          />
            {locations.map(location => (
              <Marker
                key={location.id}
                position={{lat: location.coord.lat, lng: location.coord.lon}}
                icon={{
                  url: `https://openweathermap.org/img/w/${location.weather[0].icon}.png`,
                }}
                onClick={() => {
                  setSelectedLocation(location)
                }}

              >
              </Marker>
            ))}
          {selectedLocation &&
          <InfoWindow
            onCloseClick={() => {
              setSelectedLocation(null);
            }}
            position={{lat: selectedLocation.coord.lat, lng: selectedLocation.coord.lon}}
          >
            <div>
              <div className={classes.cityName}>{selectedLocation.name}, {selectedLocation.sys.country}</div>
              <div>{Math.round(selectedLocation.main.temp)}°C</div>
              <div>feels like: {Math.round(selectedLocation.main.feels_like)}</div>
            </div>
          </InfoWindow>
          }
        </GoogleMap>
  )
}

const GoogleMaps = withScriptjs(withGoogleMap(Map));

export default GoogleMaps;


