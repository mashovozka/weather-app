import {call, takeEvery, put} from 'redux-saga/effects';
import {
  GET_CURRENT_LOCATION_WEATHER_BY_COORDS, setMainWeather,
  GET_WEATHER_BY_CITY_NAME,
  setOtherLocationWeather, GET_OTHER_LOCATION_WEATHER_BY_COORDS
} from '../actions/weather.action';
import {weatherApi} from '../../api/api';
import {getWeatherFailure} from '../actions/weather.action'

export function* weatherSaga() {
  yield takeEvery(GET_CURRENT_LOCATION_WEATHER_BY_COORDS, function* (action){
    try {
      const response = yield call(weatherApi.getWeatherByCoords, action.payload);
      yield put(setMainWeather(response.data))
    }
    catch(error){
      yield put(getWeatherFailure({ type: 'error', message: 'Something went wrong' }))
    }
  })
  yield takeEvery(GET_OTHER_LOCATION_WEATHER_BY_COORDS, function* (action){
    try {
      const response = yield call(weatherApi.getWeatherByCoords, action.payload);
      yield put(setOtherLocationWeather(response.data))
    }
    catch(error){
      yield put(getWeatherFailure({ type: 'error', message: 'Something went wrong' }))
    }
  })
  yield takeEvery(GET_WEATHER_BY_CITY_NAME, function* (action){
    try {
      const response = yield call(weatherApi.getWeatherByCityName, action.payload);
      console.log(response.data)
      yield put(setOtherLocationWeather(response.data))
    }
    catch(error){
      yield put(getWeatherFailure({ type: 'error', message: 'Something went wrong' }))
    }
  })
}