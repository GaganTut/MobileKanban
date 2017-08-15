/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';

class App extends Component {

  render() {
    return this.props.loggedIn ? (<HomePage/>) : (<LoginPage />);
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);