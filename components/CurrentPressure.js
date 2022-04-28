import { View, Text, TextInput, StyleSheet } from "react-native";


// Requires a current pressure
function CurrentPressure({onPressureChange, currentPressure}) {

    return (
        <View style={pressureStyle.container}>
            <Text style={pressureStyle.title}>Current Pressure</Text>
            <TextInput onChangeText={onPressureChange} 
            value={currentPressure} style={pressureStyle.content}
            placeholder={"Pressure"}
            ></TextInput>
        </View>
    );

}

const pressureStyle = StyleSheet.create({
    container: {
        backgroundColor: "#004488",
        borderRadius: 5,
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        textAlign: "center",
        alignItems: "center"
    },
    title: {
        color: "#CCCCCC",
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 4
    },
    content: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        width: 32
    }
})


export default CurrentPressure;