import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';

export default function App() {
    const [dogs, setDogs] = useState([]);
    console.log(movies);
    const getDogs = async () => {
        try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const json = await response.json();
        setDogs(json.dogs);
        } catch (error) {
            console.log(error);
          }
        };

return (
    <View style={styles.container}>
        <Image source={{uri: dog.message}} style={styles.dogImage} />
    <Button title='New Dog' onPress={getDogs}/>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backegroundColor: '#ecf0f1',
    }
});