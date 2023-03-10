import React from 'react';
import { StatusBar, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: 'crimson', height: 200, width: 200 }}></View>
        <View style={{
          alignSelf: 'center', backgroundColor: 'cornflowerblue',
          borderRadius: 100, height: 200, marginVertical: 20, width: 200
        }}></View>
        <View style={{
          alignItems: 'center', backgroundColor: 'greenyellow',
          alignSelf: 'flex-end', height: 200, justifyContent: 'center', width: 300
        }}>
          <Text>Texto dentro de uma View</Text>
        </View>
        <StatusBar style="light" />
      </View>
    );
  }
}