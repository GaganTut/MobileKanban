/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadApp} from '../../Actions';
import {View} from 'react-native';
import InitialLoadScreen from '../../Components/InitialLoadScreen';
import Login from '../Login';
import Home from '../Home';

class App extends Component {
  componentWillMount() {
    this.props.loadApp();
  }

  renderApplication = () => {
    console.log('Hereee');
    return this.props.loggedIn ? (<Login />) : (<Home />)
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