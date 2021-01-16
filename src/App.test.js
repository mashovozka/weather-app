import App from './App';
import {shallow} from 'enzyme';
import {findByAttr, testStore} from "../Utils";
import React from 'react';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store}/>).childAt(0);
  // console.log(wrapper.debug());
  return wrapper;
};

describe('App Component', function () {

  let wrapper;
  beforeEach(() => {
    const initialState = {
      weatherReducer: {
        currentLocationWeather: {
          location: 'some location',
          weather: 'some weather'
        },
        otherLocations: [],
        newOtherLocation: '',
        error: ''
      }
    }
    wrapper = setUp(initialState)
  });

  it("should render without errors", () => {
    // const component = findByAttr(wrapper, 'appComponent');
    // expect(component.length).toBe(1);
  });
});