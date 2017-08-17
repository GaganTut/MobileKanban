/*jshint esversion: 6*/
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import EachBoard from '../../Components/EachBoard';

class HomePage extends Component {

  renderBoards = () => {
    return (
      <View
        className="boards-page"
        >
          {this.props.allBoards.map(board =>
            <EachBoard
              key={board.id}
              board={board}
              navigate={this.props.navigation.navigate}
              />
          )}
      </View>
      )
  }

  renderMessage = () => (
    <View className="no-board-home">
      <Text className="create-board-text">Welcome to simplicity!</Text>
      <Text>To get started, use the create board button on top right of the page.</Text>
    </View>
  );

  render() {
    return (
      <View>
        {
          (this.props.allBoards.length > 0) ?
          this.renderBoards() :
          this.renderMessage()
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  allBoards: state.boards.allBoards
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);