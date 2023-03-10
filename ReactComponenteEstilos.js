import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Olá Mundo!</Text>
                <StatusBar style="light" />
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
    red: {
        color: red,
    },
});