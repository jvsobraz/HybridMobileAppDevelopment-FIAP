import React from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';

const image = { uri: 'https://reactjs.org/logo-og.png' };

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={image}
                    style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
                    <Text style={{ color: 'red', fontSize: 36, textAlign: 'center' }}>
                        Hello React Native
                    </Text>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
        );
    }
}
