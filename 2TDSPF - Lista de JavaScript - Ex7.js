import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function exibirRetanguloComTexto(faculdade, programa, autor) {
  const largura = 30;
  const altura = 5;
  const linhaHorizontal = "#".repeat(largura);
  const linhaVazia = "#".padEnd(largura, " ").padStart(largura + 1, "#");

  console.log(linhaHorizontal);
  for (let i = 0; i < altura - 3; i++) {
    console.log(linhaVazia);
  }
  console.log(`# ${faculdade.padEnd(largura - 2, " ")}#`);
  console.log(`# ${programa.padEnd(largura - 2, " ")}#`);
  console.log(`# Feito por: ${autor.padEnd(largura - 12, " ")}#`);
  console.log(linhaHorizontal);
}