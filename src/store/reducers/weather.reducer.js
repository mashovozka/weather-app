import {
  SET_MAIN_WEATHER,
  SET_OTHER_LOCATION_WEATHER,
  DELETE_LOCATION,
  GET_WEATHER_FAILURE,
  ADD_NEW_LOCATION_TO_LIST
} from '../actions/weather.action';

const initialState = {
  currentLocationWeather: '',
  otherLocations: [],
  newOtherLocation: '',
  error: ''
}

const weatherReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_MAIN_WEATHER:
        return {
          ...state,
          currentLocationWeather: action.payload
        }
      case SET_OTHER_LOCATION_WEATHER:
          return {
            ...state,
            newOtherLocation: action.payload,
          }
    case ADD_NEW_LOCATION_TO_LIST:
          return {
            ...state,
            otherLocations: [ action.payload, ...state.otherLocations]
          }
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      case DELETE_LOCATION:
        return {
          ...state,
          otherLocations: state.otherLocations.filter(location => location.id !== action.payload)
        }
    default:
      return state
  }
}

export default weatherReducer;