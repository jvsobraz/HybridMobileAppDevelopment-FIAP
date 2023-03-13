import React from 'react';
import { ActivityIndicator, StatusBar, View, } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <ActivityIndicator color='blue' size='large' />
                <ActivityIndicator color='red' size='small' />
                <ActivityIndicator color='yellow' size={80} animating={true} />
            </View>
        );
    }
}
