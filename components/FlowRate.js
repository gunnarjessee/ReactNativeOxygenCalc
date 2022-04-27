import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-web";

function FlowRate() {
    const [geto2, seto2] = useState(20);
    const [getLiters, setLiters] = useState(0);

    function onO2changed(e) {
        seto2(e)
        var result = (e - 20) / 4
        setLiters(result)
    }

    function onLitersChanged(e) {
        setLiters(e)
        var result = (4 * e) + 20
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
        padding: "2rem",
        borderRadius: "5%",
        width: "50%",
        height: "14rem",
        display: "grid",
        gridTemplateRows: "2rem 3rem 2rem 3rem",
        justifyContent: "center",
        justifyItems: "center"
    },
    content: {
        color: "#AAA",

    },
    inputText: {
        width: "50%",
        marginTop: "1rem",
        color: "#FFF",
        textAlign: "center",
        fontSize: "1.2rem"
    }
})

export default FlowRate;