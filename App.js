import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import CurrentPressure from './components/CurrentPressure';
import FlowRate from './components/FlowRate';
import TankType from './components/TankType';
import OutputTime from './components/OutputTime';
import AppStyles from './AppStyles';

// Minutes remaining = PSIG * Tank conversion factor/Flow rate
export default function App() {
  const [currentTime, setTime] = useState(0);
  const [currentPressure, setPressure] = useState(0);
  const [currentFlow, setFlow] = useState(0);
  const [currentO2Constant, setConstant] = useState(0);

  function updateTime() {
    var step0 = currentPressure * currentO2Constant;
    var step1 = (step0) / parseFloat(currentFlow);
    setTime(() => Math.round(step1));
  }

  function updateCurrentFlow(liters) {
    setFlow(() => liters);
  }

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
    <SafeAreaView style={AppStyles.container}>
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1,
          alignItems: 'center',
          paddingBottom: 20
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={AppStyles.header}>Oxygen Calculator</Text>
        
        <View style={AppStyles.card}>
          <Text style={AppStyles.cardTitle}>Tank Configuration</Text>
          <View style={AppStyles.inputContainer}>
            <TankType onTankChanged={onTankChanged}/>
          </View>
        </View>

        <View style={AppStyles.card}>
          <Text style={AppStyles.cardTitle}>Flow Settings</Text>
          <View style={AppStyles.inputContainer}>
            <FlowRate updateCurrentFlow={updateCurrentFlow}/>
          </View>
        </View>

        <View style={AppStyles.card}>
          <Text style={AppStyles.cardTitle}>Pressure Reading</Text>
          <View style={AppStyles.inputContainer}>
            <CurrentPressure onPressureChange={onPressureChange} currentPressure={currentPressure}/>
          </View>
        </View>

        <OutputTime currentTime={currentTime}/>

        <Text style={AppStyles.footer}>By Gunnar Jessee</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

/*
  TODO
  -fix updating time left calculation due to not all varibles are being updated
  -fix o2 calculation for duration
  -fix android sizing and drop down for the tank

  + edit styling, looks goofy, needs a modern touch

*/ 