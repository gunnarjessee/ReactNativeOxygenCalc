import {View, Text, StyleSheet} from 'react-native';

function OutputTime() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Time Left</Text>
            <Text style={styles.content}>00:00:00</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#004488",
        marginBottom: "4rem",
        padding: "3rem",
        color: "#FFF",
        borderRadius: ".5rem"
    },
    title: {
        color: "#CCCCCC",
        fontWeight: "bold",
        fontSize: "1rem"
    },
    content: {
        textAlign: "center",
        color: "#FFF"
    }
});

export default OutputTime;