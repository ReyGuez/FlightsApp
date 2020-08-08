import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
