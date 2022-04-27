import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlowRate from './components/FlowRate';
import TankType from './components/TankType';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gunnar's Oxygen Calculator</Text>
      <TankType/>
      <FlowRate/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "grid",
    margin: "auto",
    gridTemplateRow: "5% 10% 25% 10%",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: '#00AAFF',
    alignItems: 'center',
    justifyItems: 'center'
  },
  header: {
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",

  },
});
