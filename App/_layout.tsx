import { Stack } from "expo-router";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen></Stack.Screen>
            <Stack.Screen></Stack.Screen>
        </Stack>
    );
}