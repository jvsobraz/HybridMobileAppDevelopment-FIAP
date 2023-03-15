import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const getMovies = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      setMovies(json.movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({ item: movie }) => {
          return <Text>{movie.title}</Text>;
        }}
      />
    </View>
  );
}
