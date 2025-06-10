import { View, Text, TextInput } from "react-native";
import AppStyles from "../AppStyles";


// Requires a current pressure
function CurrentPressure({onPressureChange, currentPressure}) {
    return (
        <View style={AppStyles.inputContainer}>
            <Text style={AppStyles.label}>Current Pressure (PSI)</Text>
            <TextInput 
                style={AppStyles.textInput}
                onChangeText={onPressureChange}
                value={currentPressure.toString()}
                placeholder="Enter pressure"
                keyboardType="numeric"
            />
        </View>
    );
}


export default CurrentPressure;