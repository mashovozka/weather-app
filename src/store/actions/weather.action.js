export const GET_CURRENT_LOCATION_WEATHER_BY_COORDS = 'GET_CURRENT_LOCATION_WEATHER_BY_COORDS';
export const GET_OTHER_LOCATION_WEATHER_BY_COORDS = 'GET_OTHER_LOCATION_WEATHER_BY_COORDS';
export const SET_MAIN_WEATHER = 'SET_MAIN_WEATHER';
export const GET_WEATHER_BY_CITY_NAME = 'GET_WEATHER_BY_CITY_NAME';
export const SET_OTHER_LOCATION_WEATHER = 'SET_OTHER_LOCATION_WEATHER';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';
export const ADD_NEW_LOCATION_TO_LIST = 'ADD_NEW_LOCATION_TO_LIST';

export const getCurrentLocationWeatherByCoords = (body) => {
  return {
    type: GET_CURRENT_LOCATION_WEATHER_BY_COORDS,
    payload: body
  }
};

export const setMainWeather = (body) => {
  return {
    type: SET_MAIN_WEATHER,
    payload: body
  }
};

export const getOtherLocationWeatherByCoords = (body) => {
  return {
    type:GET_OTHER_LOCATION_WEATHER_BY_COORDS,
    payload: body
  }
}

export const getWeatherByCityName = (body) => {
  return {
    type: GET_WEATHER_BY_CITY_NAME,
    payload: body
  }
};

export const setOtherLocationWeather = (body) => {
  return {
    type: SET_OTHER_LOCATION_WEATHER,
    payload: body
  }
};

export const addNewLocationToList = (body) => {
  return {
    type: ADD_NEW_LOCATION_TO_LIST,
    payload: body
  }
}

export const deleteLocation = (body) => {
  return {
    type: DELETE_LOCATION,
    payload: body
  }
}

export const getWeatherFailure = (message) => ({type: GET_WEATHER_FAILURE, payload: message})
