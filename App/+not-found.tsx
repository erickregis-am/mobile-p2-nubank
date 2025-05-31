import { View, StyleSheet, Text, Dimensions, Button } from "react-native";
import { Link } from "expo-router"; 

const { width, height } = Dimensions.get("window");

export default function NotFound(){
    return(
        <View style={styles.container}>
            <Link replace href="/Home" asChild>
                <Button title="Ir para o Menu" />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
    },
});