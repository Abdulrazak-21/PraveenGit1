/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from './components/Profile/Profile';
import ProfileDetails from './screens/ProfileDetails/ProfileDetails';
import Emails from './components/Emails/Emails';
import EmailInfo from './components/Emails/EmailInfo';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="email">
        {/* <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="profiledetails" component={ProfileDetails} /> */}
        <Stack.Screen name="emails" component={Emails} />
        <Stack.Screen name="email-info" component={EmailInfo} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
