import React from 'react';
import {shallow} from 'enzyme';
import CurrentLocation from './CurrentLocation'
import {findByAttr, testStore} from "../../../Utils";

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const component = shallow(<CurrentLocation store={store}/>).childAt(0);
  console.log(component.debug());
  return component;
};

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('Should render without errors', () => {
    const wrapper = findByAttr(component, 'CurrentLocation')
    expect(wrapper.length).toBe(1);
  });

})