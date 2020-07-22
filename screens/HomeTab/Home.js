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
import * as data from '../../seeding/seed.json';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const Home = (props) => {
  const [groups, setGroups] = useState([]);
  const { route, navigation } = props;

  const testData = [
    {
      group_id: '1',
      group_name: 'northcoders',
      tasks: [
        {
          task_id: '1',
          task_title: 'fix frontend',
          created_at: Date.now(),
          deadline: '20/10/2020',
          assigned_to: 'John',
          task_description: 'fix front end and styling please!',
        },
        {
          task_id: '2',
          task_title: 'sort servers',
          created_at: Date.now(),
          deadline: '20/10/2020',
          assigned_to: 'John',
          task_description: 'fix api requests please!',
        },
      ],
    },
    {
      group_id: '2',
      group_name: 'home',
      tasks: [
        {
          task_id: '1',
          task_title: 'vacuum',
          created_at: Date.now(),
          deadline: '20/10/2020',
          assigned_to: 'John',
          task_description: 'vacuum carpets please!',
        },
      ],
    },
    {
      group_id: '3',
      group_name: 'another',
      tasks: [
        {
          task_id: '1',
          task_title: 'mow lawn',
          created_at: Date.now(),
          deadline: '20/10/2020',
          assigned_to: 'John',
          task_description: 'mow lawn please!',
        },
      ],
    },
  ];

  useEffect(() => {
    setGroups(data.groups);
  }, []);

  const GroupButton = ({ group }) => (
    <TouchableOpacity
      style={styles.group_button}
      onPress={() => {
        navigation.navigate('Group', { group });
      }}
    >
      <Text style={styles.group_text}>{group.name}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <GroupButton group={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Groups</Text>
        <TouchableOpacity
          style={styles.add_button}
          onPress={() => {
            console.log('pressed add group!');
            navigation.navigate('NewGroup');
          }}
        >
          <Text style={styles.add_button_text}>add group</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={groups}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={styles.list}
      />
    </SafeAreaView>
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
  list: {
    flex: 1,
    width: '65%',
  },
  no_groups: {
    width: '65%',
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  group_button: {
    flex: 1,
    margin: 10,
    backgroundColor: '#5f4b6e',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  group_text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  add_button_text: {
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
});

export default Home;
