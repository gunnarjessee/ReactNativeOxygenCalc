import { LogBox, Picker, StyleSheet, Text, View } from "react-native-web";

const tankTypes = {
    ['k-tank']: {
        'name': "K Tank",
        'constant': "",
        'psi': ""
    },
    ['d-tank']: {
        'name': "D Tank",
        'constant': "",
        'psi': ""
    },
    ['h-tank']: {
        'name': "H Tank",
        'constant': "",
        'psi': ""
    },
    ['m-tank']: {
        'name': "M Tank",
        'constant': "",
        'psi': ""
    }
}


// This is a view for react
function TankType() {

    function getTanks() {
        const returnValue = []
        for (const tank in tankTypes) {
            returnValue.push(<Picker.Item label={tankTypes[tank]["name"]}
                value={tank} key={tank} style={tankStyle.pickerItem}
            />);
        }
        return returnValue;
    }

    return (
        <View style={tankStyle.container}>
            <Text style={tankStyle.title}>Tank Type</Text>
            <Picker style={tankStyle.picker}>
                {getTanks()}
            </Picker>
        </View>
    );
}

const tankStyle = StyleSheet.create({
    container: {
        margin: "0",
        backgroundColor: "#004488",
        aspectRatio: "2/1",
        width: "10rem",
        display: "flex",
        margin: "auto",
        alignItems: "center",
        marginTop: "2%",
        paddingTop: "2%",
        color: "#AAAAAA",
        borderRadius: "5%"
    },
    
    title: {
        color: "#CCCCCC",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "bold"
    },

    pickerItem: {
        textAlign: "center",
    },

    picker: {
        marginTop: ".5rem"
    }

});

export default TankType;