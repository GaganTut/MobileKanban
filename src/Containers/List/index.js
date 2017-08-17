/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadApp} from '../../Actions';
import {View} from 'react-native';

class App extends Component {

  render() {
    return (<View></View>);
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);