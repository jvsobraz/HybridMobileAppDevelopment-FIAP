import React from 'react';
import { Button, StatusBar, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'blue',
            hidden: false,
        }
    }

    render() {
        const { color, hidden } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={color}
                    barStyle='default'
                    hidden={hidden}
                />
                <Button title="Mudar cor" onPress={() => { this.setState({ color: 'red' }) }} />
                <View style={{ marginBottom: 20 }} />
                <Button title="Esconder" onPress={() => { this.setState({ hidden: true }) }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 