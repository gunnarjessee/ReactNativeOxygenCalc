import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrentPressure from './components/CurrentPressure';
import FlowRate from './components/FlowRate';
import TankType from './components/TankType';
import OutputTime from './components/OutputTime';
import AppStyles from './AppStyles';

// Minutes remaining = PSIG * Tank conversion factor/Flow rate
export default function App() {

  const appStyle = reqire('./AppStyles')

  // will be in time formate
  const [currentTime, setTime] = useState(0);
  const [currentPressure, setPressure] = useState(0);
  const [currentFlow, setFlow] = useState(0);
  const [currentO2Constant, setConstant] = useState(0)
  
  function updateTime() {
    console.log("-------");
    console.log(currentFlow + " flow");
    console.log(currentO2Constant + " constant");
    console.log(currentPressure + " pressure");

    console.log("-------");
    var calc = (parseInt(currentPressure) * parseInt(currentO2Constant)) / parseInt(currentFlow);
    setTime(calc);
    console.log(calc);
  }

  function updateCurrentFlow(liters) {
    setFlow(liters);
    console.log('current flow '+ currentFlow)
  }

  // when current pressure is changed
  function onPressureChange(e) {
    setPressure(e);
    updateTime();
  }

  function onTankChanged(tankSelected, tankData) {
    setConstant(tankData[tankSelected]['constant']);
    console.log("new constant " + currentO2Constant);
    
    updateTime();
  }

  return (
    <View style={appStyle.container}>
      <Text style={appStyle.header}>Oxygen Calculator</Text>
    </View>
  );
}
