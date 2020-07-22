import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { users } from '../../seeding/seed.json';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const Profile = (props) => {
  const [user, setUser] = useState('');
  const [tasks, setTasks] = useState('');

  useEffect(() => {
    setUser(users[0]);
    setTasks(users[0].tasks);
  }, []);

  const TaskCard = ({ task }) => (
    <View style={styles.task_card}>
      <Text style={styles.task_title}>{task.title}</Text>
      <Text style={styles.task_attr}>{task.description}</Text>
      <Text style={styles.task_attr}>created: {task.created_at}</Text>
      <Text style={styles.task_attr}>deadline: {task.deadline}</Text>
      <Text style={styles.task_attr}>attachments: {task.attachments}</Text>
      <View style={styles.task_buttons}>
        <TouchableOpacity
          style={styles.group_button}
          onPress={() => console.log('pressed assign task!')}
        >
          <Text style={styles.group_text}>assign task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.group_button}
          onPress={() => console.log('pressed completed!')}
        >
          <Text style={styles.group_text}>completed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.group_button}
          onPress={() => console.log('pressed edit task!')}
        >
          <Text style={styles.group_text}>edit task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.group_button}
          onPress={() => console.log('pressed delete task!')}
        >
          <Text style={styles.group_text}>delete task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({ item }) => <TaskCard task={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: user.avatar }} />
        <Text style={styles.header_text}>{user.username}</Text>
      </View>
      {tasks.length > 0 ? (
        <View style={styles.tasks_section}>
          <View style={styles.sorts}>
            <TouchableOpacity style={styles.sort_button}>
              <Text style={styles.sort_button_text}>created at</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sort_button}>
              <Text style={styles.sort_button_text}>deadline</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            style={styles.list}
          />
        </View>
      ) : (
        <View style={styles.no_groups}>
          <Text style={styles.no_groups_text}>You have no tasks.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: '15%',
    backgroundColor: 'lightgray',
    width: ScreenWidth,
    borderRadius: 10,
  },
  header_text: {
    color: '#5f4b6e',
    fontSize: 50,
  },
  groups: {
    flex: 1,
  },
  text_input: {
    height: 40,
    width: 150,
    marginVertical: 10,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
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
  image: {
    flex: 1,
    width: ScreenWidth,
  },
  tasks_section: {
    flex: 1,
  },
  task_card: {
    backgroundColor: 'lightgray',
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  task_attr: {
    marginVertical: 3,
    textAlign: 'center',
  },
  task_buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  group_button: {
    margin: 10,
    backgroundColor: '#5f4b6e',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  group_text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
  sorts: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
    marginBottom: 10,
  },
  sort_button: {
    marginHorizontal: 10,
    marginTop: -20,
    width: 100,
    height: 30,
    backgroundColor: '#887399',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sort_button_text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '70%',
  },
  task_title: {
    color: '#5f4b6e',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
  },
  no_groups: {
    flex: 1,
    justifyContent: 'center',
  },
  no_groups_text: {
    width: 300,
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
