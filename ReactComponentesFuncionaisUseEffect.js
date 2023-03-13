import React, { useReducer } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';

const ACTIONS = {
    INCREMENTAR: "INCREMENTAR",
    DECREMENTAR: "DECREMENTAR",
    RESETAR: "RESETAR"
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENTAR:
            return state + 1;
        case ACTIONS.DECREMENTAR:
            return state - 1;
        case ACTIONS.RESETAR:
            return 0;
        default:
            return state;
    }
};

export default function App() {
    const [contador, dispatch] = useReducer(reducer, 0);

    return (
        <View>
            <Text>Contador: {contador}</Text>
            <Button title="Incrementar" onPress={() => dispatch({ type: ACTIONS.INCREMENTAR })} />
            <Button title="Decrementar" onPress={() => dispatch({ type: ACTIONS.DECREMENTAR })} />
            <Button title="Resetar" onPress={() => dispatch({ type: ACTIONS.RESETAR })} />
            <StatusBar />
        </View>
    );
}