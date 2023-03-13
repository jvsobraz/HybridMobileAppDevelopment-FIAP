import React from 'react';
import { StatusBar, Image, View } from 'react-native';

import img from "./QUALQUER IMAGEM.png"

export default class App extends React.Component {
    render() {
        return (
            <View style={{ padding: 16 }}>
                <Image
                    source={img}
                    style={{ alignSelf: "center", with: 200, height: 200 }}
                />
                <StatusBar style="auto" />
            </View>
        );
    }
}