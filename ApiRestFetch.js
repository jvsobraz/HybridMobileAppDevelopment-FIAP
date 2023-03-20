import { useState, useEffect } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, Image, Button, StyleSheet } from 'react-native';

export default function App() {
    const [pokemonsIniciais, setPokemonsIniciais] = useState([]);
    const [pokemonEscolhido, setPokemonEscolhido] = useState(null);
}

const getInitialPokemons = () => {
    const endpoint = 'https://pokeapi.com/api/v2/pokemon';

    fetch(endpoint)
        .then(resposta => resposta.json())
        .then(response => {
            const data = response.results;
            console.log(data)
            setPokemonsIniciais(data);
        })
        .catch(() => {
            Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
        });
}

const getPokemonData = (url) => {

    fetch(url)
        .then(resposta => resposta.json())
        .then(json => {
            const pokemon = {
                nome: json.name,
                img: json.sprites.other["dream_world"].front_default,
                peso: json.weight,
            };

            setPokemonEscolhido(pokemon);
        })
        .catch(() => {
            Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
        });
}

useEffect(() => {
    getInitialPokemons()
}, [])

return (
    <SafeAreaView styles={styles.container}>
        <ScrollView>
            <SafeAreaView styles={styles.topo}>
                <Text style={styles.topoTitulo}>ESCOLHA SEU POKÉMON</Text>
            </SafeAreaView>

            {pokemonEscolhido !== null && (
                <SafeAreaView styles={styles    .pokemonBox}>
                    <Text style={styles.pokemonNome}>Nome: {pokemonEscolhido.nome}</Text>
                    <Text style={styles.pokemonPeso}>Peso: {pokemonEscolhido.peso}</Text>

                    <Image resizeMode="stretch" source={{ uri: pokemonEscolhido.img }} style={styles.pokemonImg} />
                </SafeAreaView>
            )}

            {pokemonsIniciais.map(pokemon => (
                <SafeAreaView style={styles.cardContainer}>
                    <Text style={styles.cardTitle}>{pokémon.name}</Text>
                    <Button title="Dados do Pokémon" onPress={() => getPokemonData(pokemon.url)} />
                </SafeAreaView>
            ))}
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },

    topo: { height: 80, padding: 20, paddingTop: 20, marginBottom: 20, backgroundColor: '#e73e33' },
    topoTitulo: { fontSize: 20, marginBottom: 10, color: '#fff', textAlign: 'center' },

    cardContainer: { borderWidth: 1, borderColor: '#d5d5d5d', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 },
    cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },

    pokemonBox: { alignItemns: 'center' },
    pokemonNome: { fontSize: 22 },
    pokemonPeso: { fontSize: 18 },
    pokemonImg: { width: 150, height: 150, }
});