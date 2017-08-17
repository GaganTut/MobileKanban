/*jshint esversion: 6*/
import React, { Component } from "react";
import {StackNavigator} from 'react-navigation';
import Register from './Containers/Register';
import Loading from './Containers/Loading';
import Home from './Containers/Home';
import Board from './Containers/Board';
import Card from './Containers/Card';
import EditCard from './Containers/EditCard';
import Form from './Containers/Form';
import Login from './Containers/Login';

const InitialNavRoutes = StackNavigator({
  Loading: {screen: Loading},
  Login: {screen: Login},
  Register: {screen: Register},
  Home: {screen: Home},
  Board: {screen: Board},
  Card: {screen: Card},
  EditCard: {screen: EditCard},
  Form: {screen: Form},
});

export default class InitialNav extends Component {
  render() {
    return (
      <InitialNavRoutes  />
    );
  }
}