import React from 'react';
import { StatusBar, View, Text } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ padding: 16}}>
                <View style={{backgroundColor: "yellow", color: "#fff", fontSize: 18, lineHeight: 25}}>
                    TEXTO
                </View>
                <StatusBar style="light"/>
            </View>
        );
    }
}