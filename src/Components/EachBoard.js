/*jshint esversion: 6*/
import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

export default ({board, navigate}) => {
  return (
    <TouchableOpacity className="each-board" onPress={navigate('Board', {id: baord.id})}>
      <Text className="board-title">{board.title}</Text>
      <Text>Owner: {board.Users.filter(user => user.BoardUser.permission === 'Owner')[0].BoardUser.UserEmail}</Text>
      <Text>Date Created: {new Date(board.createdAt).toDateString()}</Text>
    </TouchableOpacity>
  );
};