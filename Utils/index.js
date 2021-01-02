import {applyMiddleware, createStore} from "redux";
import rootReducer from '../src/store/reducers/rootReducer';
import {middleware} from "../src/store/store";

export const findByAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleWare(rootReducer, initialState);
};