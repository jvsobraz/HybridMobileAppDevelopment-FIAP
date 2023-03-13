import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ padding: 16 }}>
                <TouchableOpacity
                    activeOpacity={0.05}
                    onPress={_ => alert('Pressionado')}
                    underlayColor='yellow'>
                    <Text>Um texto clicável.</Text>
                </TouchableOpacity>
                <StatusBar style='auto' />
            </View>
        );
    }
}
