import {currentLocation, otherLocations } from '../actions/';

const initialState = {
  currentLocationWeather: '',
  otherLocations: [],
  newOtherLocation: '',
  error: ''
}

const weatherReducer = (state = initialState, action) => {
  switch(action.type){
    case currentLocation.GET_MAIN_WEATHER_SUCCESS:
        return {
          ...state,
          currentLocationWeather: action.payload
        }
      case otherLocations.GET_OTHER_LOCATION_WEATHER_SUCCESS:
          return {
            ...state,
            newOtherLocation: action.payload,
          }
    case otherLocations.ADD_NEW_LOCATION_TO_LIST:
          return {
            ...state,
            otherLocations: [ action.payload, ...state.otherLocations]
          }
    case currentLocation.GET_MAIN_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case otherLocations.DELETE_LOCATION:
        return {
          ...state,
          otherLocations: state.otherLocations.filter(location => location.id !== action.payload)
        }
    default:
      return state
  }
}

export default weatherReducer;