/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {

  renderApp = () => (
    <HomePage/>
  )

  render() {
    return (
      {this.props.loggedIn ? this.renderApp() : this.renderLogin()}
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);