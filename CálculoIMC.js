import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const calculateIMC = () => {
    const imc = peso / (((altura / 100) * altura) / 100);
    setResultado(`Seu IMC é ${bmi.toFixed(2)}`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={peso}
        onChangeText={(value) => setPeso(value)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        value={altura}
        onChangeText={(value) => setAltura(value)}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calculateIMC} />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
