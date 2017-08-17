/*jshint esversion: 6*/
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

class HomePage extends Component {

  render() {
    return (
      <View>
        <Text>
          HOME PAGE
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);