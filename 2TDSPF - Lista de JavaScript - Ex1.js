import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Paulista() {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>FIAP</Text>
      <Text style={styles.title}>RM95749</Text>
      <Text style={styles.title}>Análise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.title}>João Vitor Santiago de Oliveira Braz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Paulista;