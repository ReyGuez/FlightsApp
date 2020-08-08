import React, {Component} from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              animationEnabled: true,
              cardStyle: {
                backgroundColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              animationEnabled: true,
              cardStyle: {
                backgroundColor: 'white',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
