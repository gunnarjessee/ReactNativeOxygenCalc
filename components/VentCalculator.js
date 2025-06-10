import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import AppStyles, { COLORS } from '../AppStyles';
import TankType from './TankType';

function VentCalculator({ onTimeUpdate }) {
    const [tidalVolume, setTidalVolume] = useState('500'); // in mL
    const [respiratoryRate, setRespiratoryRate] = useState('12'); // breaths per minute
    const [fio2, setFio2] = useState('100'); // percentage
    const [currentPressure, setCurrentPressure] = useState('0'); // PSI
    const [currentO2Constant, setO2Constant] = useState('3.14'); // Using K tank as default
    const [biasFlow, setBiasFlow] = useState('5'); // L/min bias flow
    const PRESSURE_MARGIN = 200; // PSI safety margin for ventilator

    useEffect(() => {
        calculateTime();
    }, [tidalVolume, respiratoryRate, fio2, currentPressure, currentO2Constant, biasFlow]);

    const calculateTime = () => {
        // Convert tidal volume to liters
        const tidalVolumeL = parseFloat(tidalVolume) / 1000;
        
        // Calculate minute volume (L/min)
        const minuteVolume = tidalVolumeL * parseFloat(respiratoryRate);
        
        // Calculate oxygen consumption (L/min)
        // For LTV 1200, we need to account for the bias flow
        const biasFlowL = parseFloat(biasFlow);
        
        // Total oxygen consumption
        const totalO2Consumption = minuteVolume + biasFlowL;
        
        // Calculate time remaining with pressure margin
        const usablePressure = Math.max(0, parseFloat(currentPressure) - PRESSURE_MARGIN);
        const step0 = usablePressure * parseFloat(currentO2Constant);
        const timeRemaining = Math.round(step0 / totalO2Consumption);
        
        onTimeUpdate(timeRemaining);
    };

    const handleTankChange = (tankSelected, tankData) => {
        setO2Constant(tankData[tankSelected]['constant']);
    };

    return (
        <ScrollView 
            contentContainerStyle={{ 
                flexGrow: 1,
                alignItems: 'center',
                paddingBottom: 20
            }}
            showsVerticalScrollIndicator={false}
        >
            <Text style={AppStyles.header}>LTV 1200 Calculator</Text>
            
            <View style={AppStyles.card}>
                <Text style={AppStyles.cardTitle}>Tank Settings</Text>
                <TankType onTankChanged={handleTankChange} />
                <View style={AppStyles.inputContainer}>
                    <Text style={AppStyles.label}>Current Pressure (PSI)</Text>
                    <TextInput 
                        style={AppStyles.textInput}
                        value={currentPressure}
                        onChangeText={setCurrentPressure}
                        keyboardType="numeric"
                        placeholder="Enter current pressure"
                    />
                    <Text style={[AppStyles.label, { fontSize: 12, color: COLORS.textLight, marginTop: 4 }]}>
                        Note: 200 PSI safety margin included in calculations
                    </Text>
                </View>
            </View>

            <View style={AppStyles.card}>
                <Text style={AppStyles.cardTitle}>Ventilator Settings</Text>
                <View style={AppStyles.inputContainer}>
                    <Text style={AppStyles.label}>Tidal Volume (mL)</Text>
                    <TextInput 
                        style={AppStyles.textInput}
                        value={tidalVolume}
                        onChangeText={setTidalVolume}
                        keyboardType="numeric"
                        placeholder="Enter tidal volume"
                    />
                </View>

                <View style={AppStyles.inputContainer}>
                    <Text style={AppStyles.label}>Respiratory Rate (breaths/min)</Text>
                    <TextInput 
                        style={AppStyles.textInput}
                        value={respiratoryRate}
                        onChangeText={setRespiratoryRate}
                        keyboardType="numeric"
                        placeholder="Enter respiratory rate"
                    />
                </View>

                <View style={AppStyles.inputContainer}>
                    <Text style={AppStyles.label}>FiO2 (%)</Text>
                    <TextInput 
                        style={AppStyles.textInput}
                        value={fio2}
                        onChangeText={setFio2}
                        keyboardType="numeric"
                        placeholder="Enter FiO2"
                    />
                </View>

                <View style={AppStyles.inputContainer}>
                    <Text style={AppStyles.label}>Bias Flow (L/min)</Text>
                    <TextInput 
                        style={AppStyles.textInput}
                        value={biasFlow}
                        onChangeText={setBiasFlow}
                        keyboardType="numeric"
                        placeholder="Enter bias flow"
                    />
                    <Text style={[AppStyles.label, { fontSize: 12, color: COLORS.textLight, marginTop: 4 }]}>
                        Typical range: 5-10 L/min
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default VentCalculator; 