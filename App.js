import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrentPressure from './components/CurrentPressure';
import FlowRate from './components/FlowRate';
import TankType from './components/TankType';
import OutputTime from './components/OutputTime';

export default function App() {

  function onPressureChange() {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Oxygen Calculator</Text>
      <TankType/>
      <FlowRate/>
      <CurrentPressure pressure={onPressureChange}></CurrentPressure>
      <OutputTime/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: '#00AAFF',
    alignItems: 'center',
  },
  header: {
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",


  },
});
