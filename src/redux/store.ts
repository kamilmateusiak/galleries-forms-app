import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './rootSaga';

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
