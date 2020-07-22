import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const CreateGroup = (props) => {
  const [group, setGroup] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(group, password);
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Create group</Text>
      </View>
      <View style={styles.group}>
        <Text>Group name:</Text>
        <TextInput
          style={styles.text_input}
          onSubmitEditing={({ nativeEvent }) => setGroup(nativeEvent.text)}
          autoCapitalize="none"
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.text_input}
          onSubmitEditing={({ nativeEvent }) => setPassword(nativeEvent.text)}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Pressed create group!');
          }}
        >
          <Text style={styles.button_text}>create group</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    width: ScreenWidth,
    height: '13%',
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  header_text: {
    color: '#5f4b6e',
    fontSize: 50,
  },
  group: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input: {
    height: 40,
    borderColor: 'lightgray',
    padding: 5,
    borderWidth: 1,
    width: 150,
    marginBottom: 25,
  },
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

export default CreateGroup;
