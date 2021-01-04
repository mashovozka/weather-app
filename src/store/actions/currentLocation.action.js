export const GET_MAIN_WEATHER = 'GET_WEATHER';
export const GET_MAIN_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_MAIN_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

const action = (type, payload = {}) => ({type, payload});

export const weatherFailure = (message) => ({type: GET_MAIN_WEATHER_FAILURE, payload: message});

export const getWeather = {
  request: coords => action(GET_MAIN_WEATHER , coords),
  success: weather => action(GET_MAIN_WEATHER_SUCCESS, weather)
}