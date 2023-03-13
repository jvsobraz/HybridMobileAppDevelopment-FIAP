import React from 'react';
import { SectionList, StatusBar, Text, View } from 'react-native';

const lanches = [
    { id: 1, nome: 'Cachorro quente' },
    { id: 2, nome: 'Misto quente' },
    { id: 3, nome: 'Hambúrguer' }
];

const bebidas = [
    { id: 1, nome: 'Água' },
    { id: 2, nome: 'Refrigerante' },
    { id: 3, nome: 'Suco' },
    { id: 1, nome: 'Cerveja' },
];

export default class App extends React.Component {
    render() {
        return (
            <View>
                <SectionList
                    sections={[
                        { title: "Lanches", data: lanches },
                        { title: "Bebidas", data: bebidas },
                    ]}
                    renderSectionHeader={({ section }) => (
                        <Text style={{ backgroundColor: 'tan', borderWidth: 1, padding: 16 }}>
                            {section.title}
                        </Text>
                    )}
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