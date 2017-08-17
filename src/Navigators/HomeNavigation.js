/*jshint esversion: 6*/
import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import {HomeNav} from '../routeConfig';

export default class HomeNavigation extends Component {
  render() {
    return (
      <HomeNav />
    );
  }
}