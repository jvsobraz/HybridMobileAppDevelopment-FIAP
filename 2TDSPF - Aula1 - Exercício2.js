import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  input: {
    backgroundColor: 'gainsboro',
    paddingLeft: 10,
    //paddingTop: 10,
    //paddingBottom: 10
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'darkgray',
  },
  inputColor: {
    backgroundColor: 'gainsboro',
    borderBottomColor: 'darkgrey',
  },
  inputSizeMedium: {
    paddingLeft: 10,
    paddingVertical: 15,
    borderBottomWidth: 2,
  },
  inputSizeLarge: {
    paddingLeft: 20,
    paddingVertical: 20,
    borderBottomWidth: 3,
  },
  viewPrincipal: {
    marginTop: 20,
  },

  botao: {
    backgroundColor: "darkcyan",
    borderColor: "cyan",
    borderRadius: 20,
    borderWight: 3,
    marginTop: 20,
  },

  botaoTexto: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    textShadowColor: "white",
    textShadowOffset: {wight: 2, height: 3},
    textShadowRadius: 3,
  }

});

function Principal() {
  return (
    <View>
      <TextInput
        style={estilos.input}
        placeholder="Nome do Pet:"
        placeholderTextColor="darkgray"
      />
      <TextInput
        style={estilos.input}
        placeholder="Raça:"
        placeholderTextColor="darkgray"
      />
    
    <View style={estilos.botao}>
      <Text style={estilos.botaoTexto}>Cadastrar</Text>
    </View>
  </View>
  );
}

export default Principal;
