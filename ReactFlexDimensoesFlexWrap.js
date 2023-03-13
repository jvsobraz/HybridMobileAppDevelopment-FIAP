import React from 'react';
import {
    Modal,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false })}>
                    <View
                        style={[styles.container, { backgroundColor: 'lightseagreen' }]}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <TouchableOpacity
                            styles={styles.button}
                            onPress={() => this.setState({ modalVisible: false })}>
                            <Text style={styles.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setState({ modalVisible: true })}>
                    <Text style={styles.buttonText}>Clique</Text>
                </TouchableOpacity>
                <StatusBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: 'steelblue',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});
