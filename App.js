import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import PagerView from 'react-native-pager-view';
import CurrentPressure from './components/CurrentPressure';
import FlowRate from './components/FlowRate';
import TankType from './components/TankType';
import OutputTime from './components/OutputTime';
import VentCalculator from './components/VentCalculator';
import AppStyles from './AppStyles';

function BasicTab({ currentTime, currentPressure, currentFlow, currentO2Constant, onPressureChange, onTankChanged, updateCurrentFlow }) {
  return (
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
    </ScrollView>
  );
}

function VentTab({ currentTime, onTimeUpdate }) {
  return (
    <View style={[AppStyles.container, { alignItems: 'center' }]}>
      <VentCalculator onTimeUpdate={onTimeUpdate} />
      <View style={{ width: '100%', alignItems: 'center' }}>
        <OutputTime currentTime={currentTime}/>
      </View>
    </View>
  );
}

export default function App() {
  const [currentTime, setTime] = useState(0);
  const [currentPressure, setPressure] = useState(0);
  const [currentFlow, setFlow] = useState(0);
  const [currentO2Constant, setConstant] = useState(0);
  const [activePage, setActivePage] = useState(0);

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
      <View style={AppStyles.tabContainer}>
        <View style={AppStyles.tabBar}>
          <Text 
            style={[
              AppStyles.tabButton, 
              activePage === 0 && AppStyles.tabButtonActive
            ]}
            onPress={() => setActivePage(0)}
          >
            Basic
          </Text>
          <Text 
            style={[
              AppStyles.tabButton, 
              activePage === 1 && AppStyles.tabButtonActive
            ]}
            onPress={() => setActivePage(1)}
          >
            Vent
          </Text>
        </View>
        
        <PagerView
          style={AppStyles.pagerView}
          initialPage={0}
          onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
        >
          <View key="1">
            <BasicTab 
              currentTime={currentTime}
              currentPressure={currentPressure}
              currentFlow={currentFlow}
              currentO2Constant={currentO2Constant}
              onPressureChange={onPressureChange}
              onTankChanged={onTankChanged}
              updateCurrentFlow={updateCurrentFlow}
            />
          </View>
          <View key="2">
            <VentTab 
              currentTime={currentTime}
              onTimeUpdate={setTime}
            />
          </View>
        </PagerView>
      </View>
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