import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppLoading } from 'expo';
import {
  useFonts,
  IndieFlower_400Regular,
} from '@expo-google-fonts/indie-flower';

const Login = (props) => {
  const [user, setUser] = useState(null);

  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });

  const handleFacebookLogin = (username) => {
    setUser('Facebook');
    console.log(user);
  };
  const handleGoogleLogin = (username) => {
    setUser('Google');
    console.log(user);
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.header}>TaskDone</Text>
        <Text style={styles.description}>Manage your tasks as a group</Text>
        <View style={styles.login}>
          <Icon.Button
            name="facebook"
            style={styles.facebook_button}
            onPress={(user) => handleFacebookLogin(user)}
          >
            <Text style={styles.button_text}>Login with Facebook</Text>
          </Icon.Button>
          <View style={styles.space}></View>
          <MaterialCommunityIcons.Button
            name="gmail"
            style={styles.gmail_button}
            onPress={(user) => handleGoogleLogin(user)}
          >
            <Text style={styles.button_text}>Login with Gmail</Text>
          </MaterialCommunityIcons.Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#887399',
    paddingTop: 50,
  },
  space: {
    margin: 10,
  },
  header: {
    fontFamily: 'IndieFlower_400Regular',
    fontSize: 60,
    color: 'white',
    marginTop: 20,
  },
  description: {
    fontSize: 25,
    color: 'white',
    marginTop: 20,
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    width: '65%',
  },
  facebook_button: {
    backgroundColor: '#3b5998',
  },
  gmail_button: {
    backgroundColor: '#A23939',
  },
  button_text: {
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default Login;
