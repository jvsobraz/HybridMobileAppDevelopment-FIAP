import React from 'react';
import { Image, ScrollView } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" }

export default class App extends React.Component {
    render() {
        return (
            <ScrollView onScrollEndDrag={_ => alert('Terminou a rolagem')}>
                <Image source={image} style={{ height: 300, width: 300 }} />
                <Image source={image} style={{ height: 300, width: 300 }} />
                <Image source={image} style={{ height: 300, width: 300 }} />
            </ScrollView>
        );
    }
}
