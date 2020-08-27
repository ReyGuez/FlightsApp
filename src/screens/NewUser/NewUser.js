import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../../translations/il18';

export default class NewUser extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#020b36', '#004290', '#01d7d9']}
        style={{flex: 1}}>
        <SafeAreaView style={styles.root}>
          <View style={styles.root}>
            <Text style={styles.advice}>{i18n.t('signin.newUser')}</Text>
            <View style={{marginHorizontal: '10%', flex: 1}}>
              <Text style={styles.labels}>{i18n.t('signin.name')}</Text>
              <View style={styles.inputs}>
                <TextInput
                  returnKeyType="next"
                  style={styles.textInputs}
                  onSubmitEditing={() => {
                    this.name.focus();
                  }}
                />
              </View>
              <Text style={styles.labels}>{i18n.t('signin.lastName')}</Text>
              <View style={styles.inputs}>
                <TextInput
                  ref={input => {
                    this.name = input;
                  }}
                  returnKeyType="next"
                  style={styles.textInputs}
                  onSubmitEditing={() => {
                    this.lastName.focus();
                  }}
                />
              </View>
              <Text style={styles.labels}>{i18n.t('signin.email')}</Text>
              <View style={styles.inputs}>
                <TextInput
                  ref={input => {
                    this.lastName = input;
                  }}
                  keyboardType="email-address"
                  returnKeyType="next"
                  style={styles.textInputs}
                  onSubmitEditing={() => {
                    this.password.focus();
                  }}
                />
              </View>
              <Text style={styles.labels}>{i18n.t('signin.password')}</Text>
              <View style={styles.inputs}>
                <TextInput
                  ref={input => {
                    this.password = input;
                  }}
                  secureTextEntry
                  returnKeyType="next"
                  style={styles.textInputs}
                  onSubmitEditing={() => {
                    // this.pss.focus();
                  }}
                />
              </View>
              <Text style={styles.labels}>{i18n.t('signin.nationality')}</Text>
              <View style={styles.inputs}>
                <TextInput
                  returnKeyType="next"
                  style={styles.textInputs}
                  onSubmitEditing={() => {}}
                />
              </View>
              <View style={{flex: 0.5}} />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
                style={styles.btnSignUp}>
                <Text style={styles.labelBtn}>{i18n.t('signin.register')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
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
  btnSignUp: {
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
  },
});
