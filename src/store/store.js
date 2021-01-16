import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import weatherReducer from "./reducers/weather.reducer";

const sagaMiddleware = createSagaMiddleware();

export const middleware = [sagaMiddleware];

const store = createStore(
  weatherReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    : applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;