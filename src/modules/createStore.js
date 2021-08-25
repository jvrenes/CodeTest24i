// npm packages
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';

// reducer
import appReducer from './rootReducers.js';

// rootSaga
import rootSagas from './rootSagas';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const rootReducer = (state, action) => {
  let newState = { ...state };
  return appReducer(newState, action);
};

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  // run the saga
  sagaMiddleware.run(rootSagas);

  return store;
};
