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
    const component = findByAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
  //
  // it('exampleMethod_updatesState method should update state as expected', () => {
  //   const classInstance = wrapper.instance();
  //   classInstance.exampleMethod_updatesState();
  //   const newState = classInstance.state.hideBtn;
  //   expect(newState).toBe(true);
  // });
  //
  // it('exampleMethod_returnsAValue method should return a value', () => {
  //   const classInstance = wrapper.instance();
  //   const number = 2
  //   const value = classInstance.exampleMethod_returnsAValue(number);
  //   expect(value).toBe(3)
  // });
});