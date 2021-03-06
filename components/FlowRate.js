import { useState, useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-web";
import AppStyles from "../AppStyles";

function FlowRate({updateCurrentFlow}) {
    const [geto2, seto2] = useState(21);
    const [getLiters, setLiters] = useState(0);

    const o2Constant = 21 // atmospheric oxygen

    useEffect(() => {
        var result = (geto2 - o2Constant) / 4;
        setLiters(() => result);
        updateCurrentFlow(result);
    }, [geto2]);

    useEffect(() => {
        var result = (4 * getLiters) + o2Constant
        seto2(() => result)
        updateCurrentFlow(getLiters);
    }, [getLiters]);

    function onO2changed(e) {
        seto2(() => e);
    }

    function onLitersChanged(e) {
        setLiters(() => e)
    }

    return (
        <View style={   AppStyles.card  }>
            <Text style={   AppStyles.title }>Flow Rate</Text>
            <Text style={   AppStyles.content  }>FiO2</Text>
            <TextInput style={  AppStyles.textInput } value={   (geto2.toString())   } 
            onChangeText={    onO2changed } keyboardType="numeric"/>
            <Text style={   AppStyles.content   }>Liters/Minute</Text>
            <TextInput style={  AppStyles.textInput   } value={  (getLiters.toString()) } 
            onChangeText={  onLitersChanged } keyboardType="numeric"/>
            
        </View>
    )
}

export default FlowRate;