/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadApp} from '../../Actions';
import {View} from 'react-native';
import InitialLoadScreen from '../../Components/InitialLoadScreen';
import AuthNavigation from '../../Navigators/AuthNavigation';
import HomeNavigation from '../../Navigators/HomeNavigation';

class App extends Component {
  componentWillMount() {
    this.props.loadApp();
  }

  renderApplication = () => {
    return this.props.loggedIn ? (<AuthNavigation />) : (<HomeNavigation />)
  }

  render() {
    return this.props.authChecked ? this.renderApplication() : (<InitialLoadScreen />);
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn,
  authChecked: state.users.authChecked
});

const mapDispatchToProps = dispatch => ({
  loadApp: () => dispatch(loadApp())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);