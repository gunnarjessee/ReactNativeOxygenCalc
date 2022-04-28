import { View, Text, TextInput, StyleSheet } from "react-native";


// Requires a current pressure
function CurrentPressure(props) {

    const pressure = props

    return (
        <View style={pressureStyle.container}>
            <Text style={pressureStyle.title}>Current Pressure</Text>
            <TextInput onTextChange={pressure} value='0' style={pressureStyle.content}></TextInput>
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