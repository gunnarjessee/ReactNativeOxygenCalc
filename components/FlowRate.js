import { useState, useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import AppStyles from "../AppStyles";

function FlowRate({updateCurrentFlow}) {
    const [getLiters, setLiters] = useState(0);

    useEffect(() => {
        updateCurrentFlow(getLiters);
    }, [getLiters]);

    function onLitersChanged(e) {
        setLiters(() => e);
    }

    return (
        <View style={AppStyles.inputContainer}>
            <Text style={AppStyles.label}>Flow Rate (L/min)</Text>
            <TextInput 
                style={AppStyles.textInput}
                value={getLiters.toString()}
                onChangeText={onLitersChanged}
                keyboardType="numeric"
                placeholder="Enter flow rate"
            />
        </View>
    );
}

export default FlowRate;