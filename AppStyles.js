import { StyleSheet } from "react-native";

function AppStyles() {

    const appStyle = StyleSheet.create({
        container: {
            padding: 16,
            backgroundColor: "#004488",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center"
        },
        
        title: {
            fontWeight: "bold",
            fontSize: 16,
            color: "#CCC"
        }
    })

}

export default AppStyles;