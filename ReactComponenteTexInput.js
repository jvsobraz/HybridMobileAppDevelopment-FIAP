import React from 'react';
import { StatusBar, View, Text, TextInput } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ padding: 16 }}>
                <TextInput
                    placeholder='Informe seu nome'
                    style={{
                        borderColor: 'gray',
                        borderWidth: 1,
                        height: 40,
                        paddingHorizontal: 16
                    }} />
                <StatusBar style="light" />
            </View>
        );
    }
}