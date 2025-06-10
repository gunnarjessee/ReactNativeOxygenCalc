import { View, Text } from 'react-native';
import AppStyles from '../AppStyles';


// Minutes remaining = PSIG * Tank conversion factor/Flow rate

// State info will be time remaining
function OutputTime({currentTime}) {
    const formatTime = (minutes) => {
        if (minutes <= 0) return '0 minutes';
        if (minutes < 60) return `${minutes} minutes`;
        
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        
        if (remainingMinutes === 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
        return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`;
    };

    return (
        <View style={AppStyles.outputCard}>
            <Text style={AppStyles.outputText}>{formatTime(currentTime)}</Text>
        </View>
    );
}


export default OutputTime;