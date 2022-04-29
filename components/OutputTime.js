import {View, Text, StyleSheet} from 'react-native';
import AppStyles from '../AppStyles';


// Minutes remaining = PSIG * Tank conversion factor/Flow rate

// State info will be time remaining
function OutputTime({currentTime}) {

    return (
        <View style={AppStyles.outputCard}>
            <Text style={AppStyles.title}>Time Left</Text>
            <Text style={AppStyles.content}>{currentTime} minutes left</Text>
        </View>
    );

}


export default OutputTime;