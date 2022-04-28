import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-web";

function FlowRate() {
    const [geto2, seto2] = useState(21);
    const [getLiters, setLiters] = useState(0);

    const o2Constant = 21

    function onO2changed(e) {
        seto2(e)
        var result = (e - o2Constant) / 4
        setLiters(result)
    }

    function onLitersChanged(e) {
        setLiters(e)
        var result = (4 * e) + o2Constant
        seto2(result)
    }

    return (
        <View style={flowRateStyle.container}>
            <Text style={flowRateStyle.content}>FiO2</Text>
            <TextInput style={flowRateStyle.inputText} value={geto2} onChangeText={onO2changed}/>
            <Text style={flowRateStyle.content}>Liters/Minute</Text>
            <TextInput style={flowRateStyle.inputText} value={getLiters} onChangeText={onLitersChanged}/>
            
        </View>
    )
}

const flowRateStyle = StyleSheet.create({
    container: {
        margin: '0',
        backgroundColor: "#004488",
        padding: "3rem",
        borderRadius: "2rem",
        height: "14rem",
        display: "grid",
        gridTemplateRows: "2rem 3rem 2rem 3rem",
        justifyContent: "center",
        justifyItems: "center"
    },
    content: {
        color: "#AAA",
        marginTop: "1rem"
    },
    inputText: {
        width: "50%",
        color: "#FFF",
        textAlign: "center",
        fontSize: "1.2rem"
    }
})

export default FlowRate;