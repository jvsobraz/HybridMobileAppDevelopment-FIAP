import React, { useState } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';

export default function App() {
    const [contador, setContador] = useState(0);

    return (
        <View>
            <Text>N° de cliques: {contador}</Text>
            <Button title="Cliques" onPress={() => setContador(contador + 1)} />
            <StatusBar />
        </View>
    );
}