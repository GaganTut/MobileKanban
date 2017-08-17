/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadApp} from '../../Actions';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';

class App extends Component {
  componentWillMount() {
    this.props.loadApp();
  }

  render() {
    return this.props.loggedIn ? (<HomePage/>) : (<LoginPage />);
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn
});

const mapDispatchToProps = dispatch => ({
  loadApp: () => dispatch(loadApp())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);