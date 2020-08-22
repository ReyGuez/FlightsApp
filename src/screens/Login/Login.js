import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../../translations/il18';

export default class Login extends Component {
  render() {
    console.log('i18n', i18n.t('login.welcome'));
    return (
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#020b36', '#004290', '#01d7d9']}
        style={{flex: 1}}>
        <SafeAreaView style={styles.root}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <View style={styles.root}>
            <View style={{flex: 0.2}} >
              <Image source = {require('../../../assets/logos/Vuelos.png')}
              style = {{height:50, width:50}} />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.advice}>{i18n.t('login.welcome')}</Text>
              <View style={{marginHorizontal: '10%', flex: 1}}>
                <Text style={styles.labels}>{i18n.t('login.email')}</Text>
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
                <Text style={styles.labels}>{i18n.t('login.password')}</Text>
                <View style={styles.inputs}>
                  <TextInput
                    ref={input => {
                      this.pss = input;
                    }}
                    secureTextEntry
                    returnKeyType="go"
                    style={styles.textInputs}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Home')}
                  style={styles.btnLogin}>
                  <Text style={styles.labelBtn}>{i18n.t('login.signIn')}</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewUser')}  style={[styles.btnLogin, {width: '60%'}]}>
                  <Text style={styles.labelBtn}>
                    {i18n.t('login.register')}
                  </Text>
                </TouchableOpacity>
                <View style={styles.btnOmit}>
                  <TouchableOpacity style={styles.bodyBtnOmit}>
                    <Text style={[styles.labelBtn, {color: 'black'}]}>
                      {i18n.t('login.skip')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    color: 'white',
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
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 20,
  },
  btnOmit: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bodyBtnOmit: {
    backgroundColor: '#EAE5D2',
    width: '50%',
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
