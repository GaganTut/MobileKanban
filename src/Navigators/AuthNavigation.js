/*jshint esversion: 6*/
import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import {AuthNav} from '../routeConfig';

export default class AuthNavigation extends Component {
  render() {
    return (
      <AuthNav />
    );
  }
}