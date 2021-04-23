import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
// import store from './store';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';
import App from './App';
import './index.css';




const store = createStore(reducers, composeWithDevTools(
  compose(applyMiddleware(thunk)),
  
));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
