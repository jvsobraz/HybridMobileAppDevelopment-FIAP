import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <Text style={[styles.smallText, styles.textStyle]}>Uma mensagem</Text>
                <Text style={[styles.largeText, styles.textStyle]}>Olá Mundo!</Text>
                <Text style={[styles.smallText, styles.textStyle]}>Outra mensagem</Text>
                <StatusBar styles="light"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    }
});