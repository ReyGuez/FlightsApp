import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import i18n from '../../translations/il18';

export default class NewUser extends Component {
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <View style={{ flex: 0.1 }} ></View>
        <View style={styles.root}>
          <Text style={styles.advice}>{i18n.t('signin.newUser')}</Text>
          <View style={{ marginHorizontal: '10%', flex: 1, backgroundColor: 'blue' }}>
            <Text style={styles.labels}>{i18n.t('signin.name')}</Text>
            <View style={styles.inputs}>
              <TextInput
                keyboardType="names"
                returnKeyType="next"
                style={styles.textInputs}
                onSubmitEditing={() => {
                  this.pss.focus();
                }}
              />
            </View>
            <Text style={styles.labels}>{i18n.t('signin.lastName')}</Text>
            <View style={styles.inputs}>
              <TextInput
                keyboardType="last-Name"
                returnKeyType="next1"
                style={styles.textInputs}
                onSubmitEditing={() => {
                  this.pss.focus();
                }}
              />
            </View>
            <Text style={styles.labels}>{i18n.t('signin.email')}</Text>
            <View style={styles.inputs}>
              <TextInput
                keyboardType="email-address"
                returnKeyType="next"
                style={styles.textInputs}
                onSubmitEditing={() => {
                  this.pss.focus();
                }}
              />
            </View>
            <Text style={styles.labels}>{i18n.t('signin.password')}</Text>
            <View style={styles.inputs}>
              <TextInput
                keyboardType="password"
                returnKeyType="next"
                style={styles.textInputs}
                onSubmitEditing={() => {
                  this.pss.focus();
                }}
              />
            </View>
            <Text style={styles.labels}>{i18n.t('signin.nationality')}</Text>
            <View style={styles.inputs}>
              <TextInput
                keyboardType="nationality"
                returnKeyType="next"
                style={styles.textInputs}
                onSubmitEditing={() => {
                  this.pss.focus();
                }}
              />
            </View>
            <View style={{ flex: 0.5 }} ></View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.btnLogin}>
              <Text style={styles.labelBtn}>{i18n.t('login.register')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  advice: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginBottom: '10%',
    fontWeight: 'bold',
  },
  labels: {
    fontSize: 23,
    color: 'white',
    paddingLeft: 10,
  },
  inputs: {
    height: 40,
    borderRadius: 30,
    backgroundColor: '#EAE5D2',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textInputs: {
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 15,
  },
  btnLogin: {
    backgroundColor: '#2191D0',
    width: '50%',
    alignSelf: 'center',
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelBtn: {
    fontSize: 23,
    color: 'white',
  }
});
