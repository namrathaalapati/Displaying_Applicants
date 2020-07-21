import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import App from "./containers/App";
import styles from "./styles/main.scss";
import applicantReducer from "./store/reducers/applicants";
import viewedReducer from './store/reducers/viewed';


const rootReducer = combineReducers({
  applicants:applicantReducer,
  viewed:viewedReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);
