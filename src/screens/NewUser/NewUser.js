import React, {Component} from 'react';
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
        <View style={styles.root}>
          <Text style={styles.advice}>{i18n.t('signin.newUser')}</Text>
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
    fontSize: 20,
  },
});
