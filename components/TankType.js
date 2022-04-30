import { LogBox, StyleSheet, Text, View } from "react-native";
import {Picker} from '@react-native-picker/picker'
import AppStyles from "../AppStyles";

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
        'constant': "1.56",
        'psi': ""
    }
}


// This is a view for react
function TankType({onTankChanged}) {


    function getTanks() {
        const returnValue = []
        for (const tank in tankTypes) {
            returnValue.push(<Picker.Item label={tankTypes[tank]["name"]}
                value={tank} key={tank} style={AppStyles.pickerItem}
            />);
        }
        return returnValue;
    }

    return (
        <View style={AppStyles.card}>
            <Text style={AppStyles.title}>Tank Type</Text>
            <Picker style={AppStyles.picker} onValueChange={(itemValue, itemIndex) => onTankChanged(itemValue, tankTypes)}>
                {getTanks()}
            </Picker>
        </View>
    );
}

export default TankType;