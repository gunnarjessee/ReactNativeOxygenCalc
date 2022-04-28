import { View, Text, TextInput, StyleSheet } from "react-native";


// Requires a current pressure
function CurrentPressure({onPressureChange, currentPressure}) {

    return (
        <View style={pressureStyle.container}>
            <Text style={pressureStyle.title}>Current Pressure</Text>
            <TextInput onChangeText={onPressureChange} 
            value={currentPressure} style={pressureStyle.content}
            placeholder={"Current Tank Pressure"}
            ></TextInput>
        </View>
    );

}

const pressureStyle = StyleSheet.create({
    container: {
        backgroundColor: "#004488",
        borderRadius: ".5rem",
        marginTop: "4rem",
        marginBottom: "4rem",
        padding: "2rem",
        textAlign: "center"
    },
    title: {
        color: "#CCCCCC",
        fontWeight: "bold",
        fontSize: "1rem",
        marginBottom: ".5rem"
    },
    content: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center"
    }
})


export default CurrentPressure;