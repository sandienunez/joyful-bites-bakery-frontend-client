import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//shows a history of the changes to the state in your Redux store over time.
// you can debug app effectively using powerful techniques like "time-travel debugging".
import rootReducer from './reducers/index'


// The last argument to createStore is the "store enhancer" = use applyMiddleware 
//to create that based on thunk middleware
// Store enhancers = let us customize  store when it's created
// Enhancers wrap = store and override its methods
// createStore = accepts one enhancer as an argument
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
//wrap thunk in the applyMiddleware call to hand in middleware you want to attach.


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
