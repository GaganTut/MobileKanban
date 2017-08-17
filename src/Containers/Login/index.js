/*jshint esversion: 6*/
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles.js';
import {login} from '../../Actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View>
        <Text>
          Please Login or Register
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.formInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          />
        <TextInput
          placeholder="Password"
          style={styles.formInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=> this.props.login(this.state)}
        >
          <Text>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=> this.props.navigation.navigate('Register')}
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
  login: authObj => dispatch(login(authObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);