import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        alert("Componente renderizado!")
    });

    return (
        <View>
            <Text>N° de cliques: {contador}</Text>
            <Button title="Cliques" onPress={() => setContador(contador + 1)} />
        </View>
    );
}