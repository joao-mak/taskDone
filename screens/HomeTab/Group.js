import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Picker } from '@react-native-community/picker';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const Group = (props) => {
  const {
    route: {
      params: { group },
    },
    navigation,
  } = props;

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(group.tasks);
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
        <Text style={styles.header_text}>{group.name}</Text>
        <TouchableOpacity
          style={styles.add_button}
          onPress={() => navigation.navigate('New Task')}
        >
          <Text style={styles.group_text}>add task</Text>
        </TouchableOpacity>
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
          <Text style={styles.no_groups_text}>
            You have no tasks. Add a new task.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  tasks_section: {
    flex: 1,
  },
  sorts: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  group_button: {
    // flex: 1,
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
  add_button: {
    flex: 1,
    margin: 10,
    width: '20%',
    height: 20,
    backgroundColor: '#887399',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  task_title: {
    color: '#5f4b6e',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
  },
});

export default Group;
