import { Stack, useRouter } from "expo-router";
import { Image, Pressable, TouchableOpacity } from "react-native";
import "../global.css"
import { EyeProviderSEM } from "@/context/EyeContext";

export default function RootLayoutSEM(){
    const routerSEM = useRouter()
    return (
        <EyeProviderSEM>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="+not-found" options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen 
                    name="ajuda" 
                    options={{ 
                        title: 'Me Ajuda',
                        headerTintColor: '#6F6F6F', 
                        headerTitleAlign: 'center', 
                        headerTitleStyle: {
                        color: '#6F6F6F',
                        fontWeight: '300',
                        fontSize: 18,
                        },
                        headerLeft: () => (
                        <TouchableOpacity onPress={() => routerSEM.back()}>
                            <Image 
                            source={require('@/assets/close.png')} 
                            style={{ width: 24, height: 24, marginLeft: 15, tintColor: '#6F6F6F' }}
                            />
                        </TouchableOpacity>
                        ),
                    }} 
                    />
            </Stack>
        </EyeProviderSEM>
    );
}