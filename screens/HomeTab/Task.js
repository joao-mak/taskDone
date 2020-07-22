import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>delete task</Text>
      </TouchableOpacity>
      <Text>task!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Task;
