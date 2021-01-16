import React from 'react';
import {mount} from 'enzyme';
import CurrentLocation from './CurrentLocation'
import {findByAttr} from "../../../Utils";
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import weatherReducer from '../../store/reducers/weather.reducer';
import {currentLocation} from "../../store/actions";

const mockGetWeather = jest.fn();

const getWrapper = (mockStore) => {
  mockGetWeather.mockClear();
  currentLocation.getWeather.request = mockGetWeather ;
  return mount(
    <Provider store={mockStore}>
      <CurrentLocation/>
    </Provider>
  )
}

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
}));

describe('<CurrentLocation/> Component', () => {

  let mockGeolocation;
  let mockStore;
  let wrapper;

  beforeEach(() => {

    mockGeolocation = {
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

    mockStore = createStore(weatherReducer, initialState);
    mockStore.dispatch = jest.fn();
    wrapper = getWrapper(mockStore);

  });

  test('renders without error', () => {
    const component = findByAttr(wrapper, 'component-currentLocation');
    expect(component.length).toBe(1);
  });

  test('getWeather gets called on CurrentLocation mount', () => {
    expect(mockGetWeather).toHaveBeenCalledWith({lat: 51.1, lng: 45.3});
  });

})