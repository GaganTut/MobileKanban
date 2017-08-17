/*jshint esversion: 6*/
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

class HomePage extends Component {

  render() {
    return (
      <View>
        <Text>
          HOME PAGE
        </Text>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Board')}
        >
          <Text>
            Register Now
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);