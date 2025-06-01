import { Stack } from "expo-router";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="+not-found" options={{headerShown: false}}></Stack.Screen>
        </Stack>
    );
}