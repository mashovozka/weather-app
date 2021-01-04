export const GET_OTHER_LOCATION_WEATHER = 'GET_OTHER_LOCATION_WEATHER';
export const GET_OTHER_LOCATION_WEATHER_SUCCESS = 'GET_OTHER_LOCATION_WEATHER_SUCCESS';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const ADD_NEW_LOCATION_TO_LIST = 'ADD_NEW_LOCATION_TO_LIST';

const action = (type, payload = {}) => ({type, payload});

export const getOtherLocationWeather = {
  request: coords => action(GET_OTHER_LOCATION_WEATHER, coords),
  success: weather => action(GET_OTHER_LOCATION_WEATHER_SUCCESS, weather)
}

export const addNewLocationToList = (body) => ({
  type: ADD_NEW_LOCATION_TO_LIST,
  payload: body
})

export const deleteLocation = (body) => ({
  type: DELETE_LOCATION,
  payload: body
})


