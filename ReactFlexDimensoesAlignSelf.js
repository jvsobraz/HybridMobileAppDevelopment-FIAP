import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, { backgroundColor: 'orangered' }]} />
                <View style={[styles.box, { backgroundColor: 'orange' }]} />
                <View style={[styles.box, { backgroundColor: 'mediumseagreen' }]} />
                <View style={[styles.box, { backgroundColor: 'deepskyblue' }]} />
                <View style={[styles.box, { backgroundColor: 'mediumturquoise' }]} />
                <View style={[styles.box, { backgroundColor: 'mediumslateblue' }]} />
                <View style={[styles.box, { backgroundColor: 'purple' }]} />
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    box: {
        width: 100,
        height: 200,
    }
})