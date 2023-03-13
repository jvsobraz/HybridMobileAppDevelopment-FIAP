import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, { backgroundColor: 'powderblue', alignSelf: 'center' }]} />
                <View style={[styles.box, { backgroundColor: 'skyblue', alignSelf: 'stretch' }]} />
                <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    box: {
        width: "auto",
        minWidth: 50,
        height: 50,
    }
})