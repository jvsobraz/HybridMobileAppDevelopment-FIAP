import React from 'react';
import { StatusBar, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1, backgroundColor: 'powderblue'
                }} />
                <View style={{
                    flex: 2, backgroundColor: 'skyblue'
                }} />
                <View style={{
                    flex: 3, backgroundColor: 'steelblue'
                }} />
                <StatusBar style="auto" />
            </View>
        );
    }
}
