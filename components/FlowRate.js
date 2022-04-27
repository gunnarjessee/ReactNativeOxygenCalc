import { useState } from "react";
import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native-web";

function FlowRate() {
    const [geto2, seto2] = useState(20);
    const [getLiters, setLiters] = useState(0);

    function onO2changed(e) {

    }

    return (
        <View style={flowRateStyle.container}>
            <TextInput value={geto2} onChangeText={onO2changed}/>
            <TextInput value={getLiters}/>
            
        </View>
    )
}

const flowRateStyle = StyleSheet.create({
    container: {
        backgroundColor: "#004488",
        aspectRatio: "19/9",
        width: "50%",
    },
})

export default FlowRate;