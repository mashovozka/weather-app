import {call, takeEvery, put} from 'redux-saga/effects';
import {currentLocation, otherLocations} from '../actions';
import {weatherApi} from '../../api/api';

export function* weatherSaga() {
  yield takeEvery(currentLocation.GET_MAIN_WEATHER, function* (action){
    try {
      const response = yield call(weatherApi.getWeatherByCoords, action.payload);
      yield put(currentLocation.getWeather.success(response.data))
    }
    catch(error){
      yield put(currentLocation.weatherFailure({ type: 'error', message: 'Something went wrong' }))
    }
  })
  yield takeEvery(otherLocations.GET_OTHER_LOCATION_WEATHER, function* (action){
    try {
      const response = yield call(weatherApi.getWeatherByCoords, action.payload);
      yield put(otherLocations.getOtherLocationWeather.success(response.data))
    }
    catch(error){
      yield put(currentLocation.weatherFailure({ type: 'error', message: 'Something went wrong' }))
    }
  })
}