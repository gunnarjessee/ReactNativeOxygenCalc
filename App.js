import React, { useEffect, useState } from 'react';
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

    var step0 = currentPressure * currentO2Constant;
    console.log(step0);
    var step1 = (step0) / parseFloat(currentFlow);
    console.log(step1);
    console.log("current constant: " + currentO2Constant);
    setTime(() => Math.round(step1));
  }

  function updateCurrentFlow(liters) {
    setFlow(() => liters);
    console.log('current flow '+ currentFlow);
  }

  // when current pressure is changed
  function onPressureChange(e) {
    setPressure(() => e);
  }

  function onTankChanged(tankSelected, tankData) {
    setConstant(() => tankData[tankSelected]['constant']);
  }

  useEffect(() => {
    updateTime()
  }, [currentFlow, currentO2Constant, currentPressure])

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
  -fix updating time left calculation due to not all varibles are being updated
  -fix o2 calculation for duration
  -fix android sizing and drop down for the tank

  + edit styling, looks goofy, needs a modern touch

*/ 