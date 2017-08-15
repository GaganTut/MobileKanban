/*jshint esversion: 6*/
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from './configureStore';
import App from './Containers/App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}