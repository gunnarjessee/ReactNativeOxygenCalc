import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrentPressure from './components/CurrentPressure';
import FlowRate from './components/FlowRate';
import TankType from './components/TankType';
import OutputTime from './components/OutputTime';
import AppStyles from './AppStyles';

// Minutes remaining = PSIG * Tank conversion factor/Flow rate
export default function App() {

  // will be in time formate
  const [currentTime, setTime] = useState(0); // output
  const [currentPressure, setPressure] = useState(0); // current guage pressure
  const [currentFlow, setFlow] = useState(0); // rate of flow
  const [currentO2Constant, setConstant] = useState(0) // contant of o2 tank
  
  function updateTime() {

    var step0 = 1800 * 0.16;
    console.log(step0);
    var step1 = step0 / 6.0;
    console.log(step1);
    console.log("current constant: " + currentO2Constant);
    setTime(Math.round(step1));
  }

  function updateCurrentFlow(liters) {
    setFlow(liters);
    console.log('current flow '+ currentFlow);
    updateTime();
  }

  // when current pressure is changed
  function onPressureChange(e) {
    setPressure(e);
    updateTime();
  }

  function onTankChanged(tankSelected, tankData) {
    setConstant(tankData[tankSelected]['constant']);
    updateTime();
  }

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header}>Oxygen Calculator</Text>
      <TankType onTankChanged={onTankChanged}/>
      <FlowRate updateCurrentFlow={updateCurrentFlow}/>
      <CurrentPressure onPressureChange={onPressureChange} currentPressure={currentPressure}/>
      <OutputTime currentTime={currentTime}/>
      <Text>Flow:{currentFlow} Constant:{currentO2Constant} Pressure:{currentPressure}</Text>
    </View>
  );
}

/*
  TODO

  -fix o2 calculation for duration
  -fix input on current pressure and flow. it never recongnizes the first typed letter
  -fix android sizing and drop down for the tank

  + edit styling, looks goofy, needs a modern touch

*/ 