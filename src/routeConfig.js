/*jshint esversion: 6*/
import React, { Component } from "react";
import {StackNavigator, TabNavigator} from 'react-navigation';
import Register from './Containers/Register';
import Loading from './Containers/Loading';
import Home from './Containers/Home';
import Board from './Containers/Board';
import Card from './Containers/Card';
import EditCard from './Containers/EditCard';
import Form from './Containers/Form';
import Login from './Containers/Login';

const tabBarOptions = {
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    pressColor: '#F2C71B',
    labelStyle: {
      color: '#FFF',
      fontWeight: 'bold'
    },
    style: {
      backgroundColor: '#65D0E8',
    },
    showIcon: true,
    showLabel: false
  }
};

const authNav = {
  Login: {screen: Login},
  Register: {screen: Register}
};

export const AuthNav = TabNavigator(authNav, tabBarOptions);

const columnNav = {
  Card: {screen: Card},
  EditCard: {screen: EditCard},
  Form: {screen: Form},
};

const boardNav = TabNavigator({
  'Queue': {screen: StackNavigator(columnNav)},
  'Progress': {screen: StackNavigator(columnNav)},
  'Completed': {screen: StackNavigator(columnNav)}
}, tabBarOptions);

const homeNav = {
  Home: {screen: Home},
  Board: {screen: boardNav}
};

export const HomeNav = StackNavigator(homeNav);
