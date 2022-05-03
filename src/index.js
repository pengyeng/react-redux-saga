import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import {initiate} from './containers/config-APP_TARGET';
import { createStore} from "redux-dynamic-modules";
import { getSagaExtension } from 'redux-dynamic-modules-saga';
//import { createStore, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga';

initiate();

const store = createStore({
  extensions: [getSagaExtension()]
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept(App);
}
