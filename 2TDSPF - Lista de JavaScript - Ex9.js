import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const valorKVh = 0.5;

class Casa {
  constructor(numero, consumo) {
    this.numero = numero;
    this.consumo = consumo;
  }

  calcularValor() {
    return this.consumo * valorKVh;
  }

  exibirDados() {
    console.log(`Casa nº: ${this.numero} KV/h: ${this.consumo} R$: ${this.calcularValor().toFixed(2)}`);
  }
}

const casas = [
  new Casa(14, 230),
  new Casa(35, 120),
  new Casa(54, 350),
  new Casa(71, 410),
  new Casa(92, 70)
];

casas.forEach(casa => casa.exibirDados());