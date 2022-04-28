import {View, Text, StyleSheet} from 'react-native';


// Minutes remaining = PSIG * Tank conversion factor/Flow rate

// State info will be time remaining
function OutputTime({currentTime}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Time Left</Text>
            <Text style={styles.content}>{currentTime} minutes left</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#004488",
        marginBottom: 16,
        padding: 10,
        color: "#FFF",
        borderRadius: 6,
        alignItems: "center"
    },
    title: {
        color: "#CCCCCC",
        fontWeight: "bold",
        fontSize: 12
    },
    content: {
        textAlign: "center",
        color: "#FFF"
    }
});

export default OutputTime;