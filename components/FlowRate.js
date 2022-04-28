import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-web";

function FlowRate({updateCurrentFlow}) {
    const [geto2, seto2] = useState(21);
    const [getLiters, setLiters] = useState(0);

    const o2Constant = 21

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
        <View style={flowRateStyle.container}>
            <Text style={flowRateStyle.label}>Flow Rate</Text>
            <Text style={flowRateStyle.content}>FiO2</Text>
            <TextInput style={flowRateStyle.inputText} value={geto2} onChangeText={onO2changed}/>
            <Text style={flowRateStyle.content}>Liters/Minute</Text>
            <TextInput style={flowRateStyle.inputText} value={getLiters} onChangeText={onLitersChanged}/>
            
        </View>
    )
}

const flowRateStyle = StyleSheet.create({
    container: {
        margin: 0,
        backgroundColor: "#004488",
        padding: 8,
        borderRadius: 5,
        justifyContent: "center",
        justifyItems: "center"
    },
    content: {
        color: "#AAA",
        marginTop: 8
    },
    label: {
        color: "#CCCCCC",
        fontWeight: "bold",
        fontSize: 12
    },
    inputText: {
        width: 50,
        color: "#FFF",
        textAlign: "center",
        fontSize: 16
    }
})

export default FlowRate;