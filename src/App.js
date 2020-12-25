import React from 'react';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './redux/reducers/index';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
  let composeEnhancers = compose;
  if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(ReduxThunk)),
  );
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
