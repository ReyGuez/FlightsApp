import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown-v2';

export default class Home extends Component {
  render() {
    let data = [
      {
        value: 'Banana',
      },
      {
        value: 'Mango',
      },
      {
        value: 'Pear',
      },
    ];
    return (
      <View style={styles.root}>
        <Text> textInComponent </Text>
        <Dropdown
          value="Mexicana"
          data={data}
          lineWidth={0}
          underlineColor="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});
