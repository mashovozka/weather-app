import React from 'react';
import {mount, shallow} from 'enzyme';
import CurrentLocation from './CurrentLocation'
import {findByAttr} from "../../../Utils";
import {Provider} from 'react-redux';
import * as redux from "react-redux";
import weatherReducer from '../../store/reducers/weather.reducer';
import {getCurrentLocationWeather} from "../../store/actions/currentLocation.action";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { useSelector, useDispatch } from 'react-redux';
import {createStore} from "redux";


describe('dispatch mock', function(){
  it('should mock dispatch', function(){
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    const mockGeolocation = {
      getCurrentPosition: jest.fn()
        .mockImplementationOnce((success) => Promise.resolve(success({
          coords: {
            latitude: 51.1,
            longitude: 45.3
          }
        })))
    };

    global.navigator.geolocation = mockGeolocation;

    const initialState = {
      currentLocationWeather: '',
      otherLocations: [],
      newOtherLocation: '',
      error: ''
    }

    const mockStore = createStore(weatherReducer, initialState);
    mount(
      <Provider store={mockStore}>
       <CurrentLocation/>
      </Provider>
      );

    expect(mockDispatchFn).toHaveBeenCalled();
    useDispatchSpy.mockClear();
  })
});
