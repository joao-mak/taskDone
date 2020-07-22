import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const NewGroup = (props) => {
  const { route, navigation } = props;
  const [user, setUser] = useState('');
  useEffect(() => {
    console.log(user);
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Create Group')}
      >
        <Text style={styles.button_text}>Create new group</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Join Group')}
      >
        <Text style={styles.button_text}>Join existing group</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  button: {
    width: '65%',
    margin: 10,
    backgroundColor: '#5f4b6e',
    padding: 10,
    borderRadius: 5,
  },
  button_text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default NewGroup;
