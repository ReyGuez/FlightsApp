import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.root}>
          <View style={{flex: 0.2}} />
          <View style={{flex: 1}}>
            <Text style={styles.advice}>{'Iniciar sesión'}</Text>
            <View style={{marginHorizontal: '10%', flex: 1}}>
              <Text style={styles.labels}>{'Correo'}</Text>
              <View style={styles.inputs}>
                <TextInput style={styles.textInputs} />
              </View>
              <Text style={styles.labels}>{'Contraseña'}</Text>
              <View style={styles.inputs}>
                <TextInput style={styles.textInputs} />
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
                style={styles.btnLogin}>
                <Text style={styles.labelBtn}>{'Ingresar'}</Text>
              </TouchableOpacity>
              <View style={styles.line} />
              <TouchableOpacity style={[styles.btnLogin, {width: '60%'}]}>
                <Text style={styles.labelBtn}>{'Registrarme'}</Text>
              </TouchableOpacity>
              <View style={styles.btnOmit}>
                <TouchableOpacity style={styles.bodyBtnOmit}>
                  <Text style={[styles.labelBtn, {color: 'black'}]}>
                    {'Omitir'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
  },
  labels: {
    fontSize: 23,
    color: 'black',
    paddingLeft: 10,
  },
  inputs: {
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
  textInputs: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 5,
  },
  btnLogin: {
    backgroundColor: '#60a137',
    width: '50%',
    alignSelf: 'center',
    height: 45,
    borderColor: '#406d26',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelBtn: {
    fontSize: 20,
    color: 'white',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  btnOmit: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bodyBtnOmit: {
    backgroundColor: 'white',
    width: '50%',
    height: 45,
    borderColor: '#406d26',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
