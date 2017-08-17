/*jshint esversion: 6*/
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

class LoginPage extends Component {
  componentDidMount() {
    console.log('Heyyyyyyyy');
  }

  render() {
    return (
      <View>
        <Text>
          LOGIN PAGE
        </Text>
        <TouchableOpacity>
          <Text>
            Hello
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);