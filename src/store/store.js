import {applyMiddleware, compose, createStore} from "redux";
import weatherReducer from "./reducers/weather.reducer";
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(weatherReducer);
