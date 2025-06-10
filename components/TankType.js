import { LogBox, StyleSheet, Text, View } from "react-native";
import {Picker} from '@react-native-picker/picker'
import AppStyles from "../AppStyles";
import { useState } from "react";

//Minutes remaining = PSIG * Tank conversion factor/Flow rate
const tankTypes = {
    ['select-tank']: {
        'name': "...",
        'constant': "",
        'psi': ""
    },
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
    const [selectedTank, setSelectedTank] = useState('k-tank');

    function getTanks() {
        return Object.entries(tankTypes).map(([key, tank]) => (
            <Picker.Item 
                label={tank.name}
                value={key} 
                key={key} 
                style={AppStyles.pickerItem}
            />
        ));
    }

    const handleTankChange = (itemValue) => {
        setSelectedTank(itemValue);
        onTankChanged(itemValue, tankTypes);
    };

    return (
        <View style={AppStyles.inputContainer}>
            <Text style={AppStyles.label}>Select Tank Type</Text>
            <Picker 
                selectedValue={selectedTank}
                onValueChange={handleTankChange}
                style={AppStyles.picker}
            >
                {getTanks()}
            </Picker>
        </View>
    );
}

export default TankType;