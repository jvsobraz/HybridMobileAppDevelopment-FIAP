import React from 'react';
import { StatusBar, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ height: '100%' }}>
                <View style={{
                    height: '15%', backgroundColor: 'powderblue'
                }} />
                <View style={{
                    width: '66%', height: '35%', backgroundColor: 'skyblue'
                }} />
                <View style={{
                    width: '33%', height: '50%', backgroundColor: 'steelblue'
                }} />
                <StatusBar style="auto" />
            </View>
        );
    }
}
