import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const NewTask = (props) => {
  const [title, setTitle] = useState('enter title here...');
  const [description, setDescription] = useState('enter description here...');
  const [attachment, setAttachment] = useState('add attachment');
  const [deadline, setDeadline] = useState('set deadline...');

  useEffect(() => {
    console.log(title);
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>New Task</Text>
      </View>
      <View style={styles.new_task}>
        <Text>{title}</Text>
        <TextInput
          style={styles.text_input}
          onSubmitEditing={({ nativeEvent }) => setTitle(nativeEvent.text)}
          autoCapitalize="none"
        />
        <Text>{description}</Text>
        <TextInput
          style={styles.text_input}
          onSubmitEditing={({ nativeEvent }) =>
            setDescription(nativeEvent.text)
          }
          autoCapitalize="none"
        />
        <Text>{deadline}</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'lightgray',
            padding: 5,
            borderWidth: 1,
            width: 150,
          }}
          onSubmitEditing={({ nativeEvent }) => setDeadline(nativeEvent.text)}
          autoCapitalize="none"
        />
        <Text>{attachment}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('pressed attachment!')}
        >
          <Text style={styles.button_text}>attachment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('pressed submit!')}
        >
          <Text style={styles.button_text}>submit!</Text>
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
  new_task: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
  text_input: {
    height: 40,
    borderColor: 'lightgray',
    padding: 5,
    borderWidth: 1,
    width: 150,
  },
});

export default NewTask;
