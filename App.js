import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeTab/Home';
import Group from './screens/HomeTab/Group';
import NewGroup from './screens/NewGroupTab/NewGroup';
import CreateGroup from './screens/NewGroupTab/CreateGroup';
import JoinGroup from './screens/NewGroupTab/JoinGroup';
import Profile from './screens/ProfileTab/Profile';
import Login from './screens/Login';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Task from './screens/HomeTab/Task';
import NewTask from './screens/HomeTab/NewTask';

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const createHomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Group" component={Group} />
      <Stack.Screen name="Task" component={Task} />
      <Stack.Screen name="New Task" component={NewTask} />
    </Stack.Navigator>
  );
};

const createNewGroupStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="New Group" component={NewGroup} />
      <Stack.Screen name="Join Group" component={JoinGroup} />
      <Stack.Screen name="Create Group" component={CreateGroup} />
    </Stack.Navigator>
  );
};

const createProfileStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState('Joao');

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <NavigationContainer>
          <BottomTab.Navigator
            initialRouteName="Home"
            activeColor="white"
            barStyle={styles.bottom_tab}
          >
            <BottomTab.Screen
              name="Home"
              children={createHomeStack}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <BottomTab.Screen
              name="NewGroup"
              children={createNewGroupStack}
              options={{
                tabBarLabel: 'New Group',
                tabBarIcon: ({ color }) => (
                  <AntDesign name="addusergroup" color={color} size={26} />
                ),
              }}
            />
            <BottomTab.Screen
              name="Profile"
              children={createProfileStack}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bottom_tab: {
    backgroundColor: '#887399',
  },
});
