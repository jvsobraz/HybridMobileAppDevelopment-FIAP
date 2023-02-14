import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const estilos = StyleSheet.create({
  iconEdit: {
    position: 'absolute',
    right: 60,
  },

  iconTrash: {
    position: 'absolute',
    right: 20,
  },

  viewPrincipal: {
    marginTop: 40,
  },
});

function Principal() {
  return (
    <View style={estilos.viewPrincipal}>
      <View>
        <Text>Rex</Text>
        <Text>Pincher - 1.2kg - 19/07/2015</Text>
        <FontAwesome style={estilos.iconEdit} name="edit" size={32} />
        <FontAwesome style={estilos.iconTrash} name="trash" size={32} />
      </View>

      <View>
        <Text>Rex</Text>
        <Text>Pincher - 1.2kg - 19/07/2015</Text>
        <FontAwesome style={estilos.iconEdit} name="edit" size={32} />
        <FontAwesome style={estilos.iconTrash} name="trash" size={32} />
      </View>
    </View>
  );
}

export default Principal;
