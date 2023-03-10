import React from 'react';
import { Button, StyleSheet, View, Text, TextInput, StatusBar, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons';

function TelaDetalhes() {
  return (
    <View styles={styles.container}>
      <Text>Detalhes</Text>
    </View>
  );
}

function TelaInicio({ navigation }) {
  return (
    <View styles={styles.container}>
      <Text>Início!</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate("Detalhes")}
      />
    </View>
  );
}

function TelaConfiguracoes({ navigation }) {
  return (
    <View styles={styles.container}>
      <Text>Configurações</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate("Detalhes")}
      />
    </View>
  );
}

const InicioStack = createNativeStackNavigator();

function TelaInicioStack() {
  return (
    <InicioStack.Navigator>
      <InicioStack.Screen name="Inicio" component={TelaInicio}/>
      <InicioStack.Screen name="Detalhes" component={TelaDetalhes}/>
    </InicioStack.Navigator>
  );
}

const ConfiguracoesStack = createNativeStackNavigator();

function TelaConfiguracoesStack() {
  return (
    <ConfiguracoesStack.Navigator>
      <ConfiguracoesStack.Screen name="Configurações" component={TelaConfiguracoes}/>
      <ConfiguracoesStack.Screen name="Detalhes" component={TelaDetalhes}/>
    </  ConfiguracoesStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShow: false,
          tabBarIcon: ({ focused, color, size }) => {
            let icone;
            if (route.name === 'InícioStack') {
              icone = 'home';
            } else if (route.name === 'ConfiguraçõesStack') {
              icone = 'settings';
            }
            return <Ionicons name={icone} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="InícioStack" component={TelaInicioStack} />
        <Tab.Screen name="ConfiguraçõesStack" component={TelaConfiguracoesStack} />
      </Tab.Navigator>
      <StatusBar barStyle="default" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
