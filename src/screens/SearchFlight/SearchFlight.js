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

export default class SearchFlight extends Component {
    render() {
        return (
            <SafeAreaView style={styles.root}>
                <View style={{ flex: 0.1 }} ></View>
                <View style={styles.root}>
                    <Text style={styles.advice}>{i18n.t('search.searchFlight')}</Text>
                </View>
                <View style={{ flex: 0.1 }} ></View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Home')}
                  style={styles.btnSearch}>
                  <Text style={styles.labelBtn}>{i18n.t('search.searchFli')}</Text>
                </TouchableOpacity>
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
    btnSearch: {
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
})
