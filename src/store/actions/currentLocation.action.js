import {weatherApi} from "../../api/api";

export const GET_MAIN_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_MAIN_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export const weatherFailure = (message) => ({type: GET_MAIN_WEATHER_FAILURE, payload: message});

export const setCurrentLocationWeather = (weather) => ({type: GET_MAIN_WEATHER_SUCCESS, payload: weather})

export const getCurrentLocationWeather = (coords) => async(dispatch) => {
   await weatherApi.getWeatherByCoords(coords)
    .then(response => {
      dispatch(setCurrentLocationWeather(response.data))
    })
     .catch(error => {
       dispatch(weatherFailure(error))
     })
}