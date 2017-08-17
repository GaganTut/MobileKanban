/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {register} from '../../Actions';
import {View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      password: '',
      valPassword: ''
    };
  }

  handleRegister = () => {
    this.props.register(this.state);
  }

  render() {
    return (
      <View>
        <Text>
          KANBAN
        </Text>
        <TextInput
          placeholder="Full Name"
          style={styles.formInput}
          onChangeText={(email) => this.setState({fullName})}
          value={this.state.fullName}
          />
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
        <TextInput
          placeholder="valPassword"
          style={styles.formInput}
          onChangeText={(password) => this.setState({valPassword})}
          value={this.state.valPassword}
          secureTextEntry={true}
          />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handleRegister}
        >
          <Text>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  register: userObj => dispatch(register(userObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);