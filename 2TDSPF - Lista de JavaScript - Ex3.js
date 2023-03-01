import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const umidade = prompt("Digite a umidade do ar em porcentagem:");

if (umidade > 60) {
  console.log("O ar está úmido");
} else if (umidade >= 30 && umidade <= 60) {
  console.log("O ar está seco");
} else {
  console.log("O ar está muito seco");
}