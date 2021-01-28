import {weatherApi} from "../../api/api";
import {weatherFailure} from "./currentLocation.action";

export const GET_OTHER_LOCATION_WEATHER = 'GET_OTHER_LOCATION_WEATHER';
export const GET_OTHER_LOCATION_WEATHER_SUCCESS = 'GET_OTHER_LOCATION_WEATHER_SUCCESS';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const ADD_NEW_LOCATION_TO_LIST = 'ADD_NEW_LOCATION_TO_LIST';

export const addNewLocationToList = (body) => ({
  type: ADD_NEW_LOCATION_TO_LIST,
  payload: body
})

export const deleteLocation = (body) => ({
  type: DELETE_LOCATION,
  payload: body
})


export const setOtherLocationWeather = (weather) => ({
  type: GET_OTHER_LOCATION_WEATHER_SUCCESS,
  payload: weather
})

export const getOtherLocationWeather = (coords) => async(dispatch) => {
  await weatherApi.getWeatherByCoords(coords)
    .then(response => {
      dispatch(setOtherLocationWeather(response.data))
    })
    .catch(error => {
      dispatch(weatherFailure(error))
    })
}


