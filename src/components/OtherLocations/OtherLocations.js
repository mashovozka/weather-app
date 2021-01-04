import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {currentLocation, otherLocations} from '../../store/actions/';
import classes from './OtherLocations.module.sass';
import {Button} from '@material-ui/core';

export default function OtherLocations() {

  const locations = useSelector(state => state.weatherReducer.otherLocations);
  const newLocation = useSelector(state => state.weatherReducer.newOtherLocation);
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const isUnique = locations.every(location => location.id !== newLocation.id)

  useEffect(() => {
    newLocation &&
    (isUnique
    ? dispatch(otherLocations.addNewLocationToList(newLocation))
    : dispatch(currentLocation.getWeatherFailure({ type: 'error', message: 'Location already exists' })))
  }, [newLocation])

  const removeLocation = (locationId) => {
    setId(locationId);
    setTimeout(() => {dispatch(otherLocations.deleteLocation(locationId))}, 1000)
  }

  return <div className={classes.locations}>
    {locations.map(location => {
      return <div key={location.id} className={classes.location} style={{opacity: `${id === location.id ? 0 : 1}`}}>
        <Button
          variant="outlined"
          className={classes.deleteButton}
          onClick={() => removeLocation(location.id)}
        >
          delete
        </Button>
        <div className={classes.cityName}>{location.name}, {location.sys.country}</div>
        <div className={classes.weatherDetails}>
          <img
            className={classes.tempImg}
            src={`https://openweathermap.org/img/w/${location.weather[0].icon}.png`}
            alt='weather img'
          />
          <span className={classes.weatherDetail}>{Math.round(location.main.temp)}°C</span>
          <span className={classes.weatherDetail}>feels like: {Math.round(location.main.feels_like)}</span>
        </div>
      </div>
    })}
  </div>
}
