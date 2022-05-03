import { View, Text, TextInput, StyleSheet } from "react-native";
import AppStyles from "../AppStyles";


// Requires a current pressure
function CurrentPressure({onPressureChange, currentPressure}) {

    return (
        <View style={   AppStyles.card }>
            <Text style={   AppStyles.title }>Current Pressure</Text>
            <TextInput onChangeText={   onPressureChange    } 
            value={ currentPressure.toString()  } style={AppStyles.textInput}
            placeholder={"Pressure"} keyboardType="numeric"
            ></TextInput>
        </View>
    );

}


export default CurrentPressure;