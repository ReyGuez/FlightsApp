import React, {Component} from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import NewUser from './src/screens/NewUser';
import SearchFlight from './src/screens/SearchFlight';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import i18n from './src/translations/il18';
import {I18nextProvider} from 'react-i18next';
import store from './src/store';
import {setStore} from './src/store/store';
import {connect} from 'react-redux';
import {Creators as LoginActions} from './src/store/ducks/login';
import {bindActionCreators} from 'redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
const Stack = createStackNavigator();

class LoginComponent extends Component {
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
          <Stack.Screen
            name="NewUser"
            component={NewUser}
            options={{
              headerShown: false,
              animationEnabled: true,
              cardStyle: {
                backgroundColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name="SearchFlight"
            component={SearchFlight}
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

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({LoginActions}, dispatch),
});

const LoginCheck = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
export default class App extends Component {
  render() {
    setStore(store);
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <SafeAreaProvider>
            <StatusBar
              translucent={true}
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <LoginCheck />
          </SafeAreaProvider>
        </I18nextProvider>
      </Provider>
    );
  }
}
