import React, { useState } from 'react';
import { View, TextInput, Text, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState([]);

  const calculateNotes = () => {
    const amountInt = parseInt(amount);
    const notesCount = { 50: 0, 20: 0, 10: 0 };

    notesCount[50] = Math.floor(amountInt / 50);
    notesCount[20] = Math.floor((amountInt % 50) / 20);
    notesCount[10] = Math.floor(((amountInt % 50) % 20) / 10);

    const notesArr = Object.keys(notesCount).map((note) => ({
      note: parseInt(note),
      count: notesCount[note],
    }));

    setNotes(notesArr);
  };

  const renderNote = ({ item }) => {
    return (
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>{item.count}x {item.note} reais</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caixa Eletrônico</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o valor"
        keyboardType="numeric"
        onChangeText={(value) => setAmount(value)}
        value={amount}
      />
      <Button title="Calcular" onPress={calculateNotes} />
      <FlatList
        data={notes}
        renderItem={renderNote}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  noteContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 18,
  },
});

export default App;