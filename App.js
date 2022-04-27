import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TankType from './components/TankType';

export default function App() {
  return (
    <View style={styles.container}>
      <TankType></TankType>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
