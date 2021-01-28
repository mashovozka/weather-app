import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from './currentLocation.module.sass';
import {calcLocalTime} from '../../common/helpers/calcLocalTime';
import {calcWindDirection} from '../../common/helpers/calcWindDirection';
import spinner from '../../img/spinner.svg';
import sadFace from '../../img/sadEmoji.png';
import {getCurrentLocationWeather} from "../../store/actions/currentLocation.action";

export default function CurrentLocation() {

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const {latitude, longitude} = position.coords;
      dispatch(getCurrentLocationWeather({lat:latitude, lng:longitude}));
    })
    // function(error) {
    //   setError("Can't find current location")
    // });
  }, [dispatch])

  // const [error, setError] = useState('')

  const weather = useSelector(state => state.currentLocationWeather)
  console.log(weather)
  const convertTime = (timeInSec) => `${new Date(timeInSec * 1000).getHours()}:${new Date(timeInSec * 1000).getMinutes()}`

  return (
    <div className={classes.wrapper} data-test='component-currentLocation'>
        <div className={classes.weatherWrapper}>
          {
            // !error &&
          weather &&
          <div className={classes.textWrapper} data-test="weather">
            <div className={classes.location}>{weather.name}, {weather.sys.country}</div>
              <div className={classes.date}>{calcLocalTime(weather.timezone)}</div>
              <div className={classes.weatherDetails}>
                <div className={classes.tempDetails}>
                  <div className={classes.tempWrapper}>
                    <img
                      className={classes.tempImg}
                      src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                      alt='weather img'
                    />
                    <div className={classes.temp}>
                      {Math.round(weather.main.temp)}°C
                    </div>
                  </div>
                  <div className={classes.minAmdMax}>
                    <div>{weather.weather[0].description}</div>
                    <div>feels like: {Math.round(weather.main.feels_like)}</div>
                    <div>Max: {Math.round(weather.main.temp_max)}°C</div>
                    <div>Min: {Math.round(weather.main.temp_min)}°C</div>
                  </div>
                </div>
                <div className={classes.otherDetails}>
                  <div>Humidity: {weather.main.humidity}%</div>
                  <div>Pressure: {weather.main.pressure} hPa</div>
                  <div>Visibility: {weather.visibility /1000}km</div>
                  <div>Wind: {weather.wind.speed} m/s {calcWindDirection(weather.wind.deg)}</div>
                  <div>
                    <div>Sunrise: {convertTime(weather.sys.sunrise)}</div>
                    <div>Sunset: {convertTime(weather.sys.sunset)}</div>
                  </div>
                </div>
              </div>
            </div>}
            {!weather &&
            // !error &&
              <div className={classes.preloader} data-test='spinner'>
                  <img src={spinner} alt={'loading...'}/>
              </div>
            }
          {/*{error &&*/}
          {/*    <div>*/}
          {/*      <div className={classes.error}>*/}
          {/*        {error}*/}
          {/*      </div>*/}
          {/*      <img src={sadFace} alt={''} className={classes.sadFace}/>*/}
          {/*    </div>*/}
          {/*}*/}
          </div>
  </div>
  )
}
