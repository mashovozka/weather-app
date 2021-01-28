import moxios from 'moxios';
import axios from 'axios'

import { createStore, applyMiddleware } from 'redux';

import weatherReducer from "../reducers/weather.reducer";
import { middlewares } from '../store';
import {getCurrentLocationWeather} from "./currentLocation.action";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(weatherReducer, initialState);
}

const mockSuccess = data => ({status: 200, response: data});
const mockError = error => ({status: 500, response: error})

describe('getCurrentWeather action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response weather to state', () => {

    const store = storeFactory();
    const weather = {city: 'wroclaw', weather: 'warm'};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400 }).then(() => {
        try {
          // assert something
          console.log(123);
        } catch (err) {
          console.log(123);
        }
      });
    });
    return store.dispatch(getCurrentLocationWeather({lat: 25, lon: 25}))
      .then(() => {
        const newState = store.getState();
        expect(newState.currentLocationWeather).toBe(weather);
      })
  });
});