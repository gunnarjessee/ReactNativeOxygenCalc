import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-web";
import AppStyles from "../AppStyles";

function FlowRate({updateCurrentFlow}) {
    const [geto2, seto2] = useState(21);
    const [getLiters, setLiters] = useState(0);

    const o2Constant = 21 // atmospheric oxygen

    function onO2changed(e) {
        seto2(e)
        var result = (e - o2Constant) / 4
        setLiters(result)
        updateCurrentFlow(getLiters)
    }

    function onLitersChanged(e) {
        setLiters(e)
        var result = (4 * e) + o2Constant
        seto2(result)
        updateCurrentFlow(e)
    }

    return (
        <View style={AppStyles.card}>
            <Text style={AppStyles.title}>Flow Rate</Text>
            <Text style={AppStyles.content}>FiO2</Text>
            <TextInput style={AppStyles.textInput} value={geto2} onChangeText={onO2changed}/>
            <Text style={AppStyles.content}>Liters/Minute</Text>
            <TextInput style={AppStyles.textInput} value={getLiters} onChangeText={onLitersChanged}/>
            
        </View>
    )
}

export default FlowRate;