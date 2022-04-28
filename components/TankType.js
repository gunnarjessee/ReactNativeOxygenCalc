import { LogBox, Picker, StyleSheet, Text, View } from "react-native";

//Minutes remaining = PSIG * Tank conversion factor/Flow rate
const tankTypes = {
    ['k-tank']: {
        'name': "K Tank",
        'constant': "3.14",
        'psi': ""
    },
    ['d-tank']: {
        'name': "D Tank",
        'constant': "0.16",
        'psi': ""
    },
    ['h-tank']: {
        'name': "H Tank",
        'constant': "3.14",
        'psi': ""
    },
    ['m-tank']: {
        'name': "M Tank",
        'constant': ".05",
        'psi': ""
    }
}


// This is a view for react
function TankType({onTankChanged}) {


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
            <Picker style={tankStyle.picker} onValueChange={(itemValue, itemIndex) => onTankChanged(itemValue, tankTypes)}>
                {getTanks()}
            </Picker>
        </View>
    );
}

const tankStyle = StyleSheet.create({
    container: {
        margin: "0",
        padding: "2rem",
        backgroundColor: "#004488",
        margin: "auto",
        alignItems: "center",
        marginTop: "2%",
        paddingTop: "2%",
        color: "#AAAAAA",
        borderRadius: ".5rem",
        marginTop: "4rem",
        marginBottom: "2rem"
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