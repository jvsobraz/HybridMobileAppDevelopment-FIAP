import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

// Classe Aluno
class Aluno {
  constructor(id, nome, ra, nascimento) {
    this.id = id;
    this.nome = nome;
    this.ra = ra;
    this.nascimento = nascimento;
  }

  estudar() {
    console.log(this.nome + ' está estudando.');
  }

  descansar() {
    console.log(this.nome + ' está descansando.');
  }
}

// Criação de um objeto Aluno
const aluno1 = new Aluno(1, 'João', '12345', '01/01/2000');

// Mostra as características do Aluno
console.log('Id: ' + aluno1.id);
console.log('Nome: ' + aluno1.nome);
console.log('RA: ' + aluno1.ra);
console.log('Data de Nascimento: ' + aluno1.nascimento);

// Executa comportamentos do Aluno
aluno1.estudar();
aluno1.descansar();