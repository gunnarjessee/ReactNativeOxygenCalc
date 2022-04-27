import { useState } from "react";
import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native-web";

function FlowRate() {
    const [geto2, seto2] = useState(20);
    const [getLiters, setLiters] = useState(0);

    function onO2changed(e) {
        seto2(e)
    }

    return (
        <View style={flowRateStyle.container}>
            <TextInput style={flowRateStyle.inputText} value={geto2} onChangeText={onO2changed}/>
            <TextInput style={flowRateStyle.inputText} value={getLiters}/>

        </View>
    )
}

const flowRateStyle = StyleSheet.create({
    container: {
        backgroundColor: "#004488",
        width: "50%",
    },
    inputText: {
        marginTop: "1rem",
        color: "#FFF",
        textAlign: "center",
        fontSize: "1.2rem"
    }
})

export default FlowRate;