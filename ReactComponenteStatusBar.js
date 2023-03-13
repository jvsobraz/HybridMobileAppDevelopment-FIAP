import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';

const json = [
    { id: 1, nome: 'Cachorro quente' },
    { id: 2, nome: 'Misto quente' },
    { id: 3, nome: 'Hambúrguer' }
];

export default class App extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data={json}
                    renderItem={({ item }) => (
                        <Text style={{ backgroundColor: 'lightblue', borderWidth: 1, padding: 16 }}>
                            {item.nome}
                        </Text>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
                <StatusBar style="auto" />
            </View>
        );
    }
}