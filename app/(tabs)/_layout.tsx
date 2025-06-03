import { View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { Tabs } from "expo-router";
import { Dimensions } from "react-native";
import "../../global.css"
import { useState } from 'react';
const { width, height } = Dimensions.get("window");

export default function TabLayout(){
    const [olhoAberto, setOlhoAberto] = useState(false);
    const toggleOlho = () => {
        setOlhoAberto(!olhoAberto);
    };

    return (
        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: '#810AD0',
                height: height * 0.125,
            },

            headerLeft: () => 
            <View style={styles.headerLeft} >
                <Image style={{width: 24, height: 24}} 
                source={require("../../assets/icons/user.png")}></Image>
            </View>,

            headerRight: () => 
            <View style={styles.headerRight} >
                <Pressable onPress={toggleOlho} android_ripple={{color: "b545ff", radius: 30}} style={styles.containerVerSaldo}>
                    <Image style={{width: 24, height: 24}} 
                    source={require("../../assets/icons/view.png")}></Image>
                </Pressable>

                <Pressable android_ripple={{color: "b545ff", radius: 30}} style={styles.containerMeAjuda}>
                    <Image style={{width: 24, height: 24}} 
                    source={require("../../assets/icons/questao.png")}></Image>
                </Pressable>

                <Pressable android_ripple={{color: "b545ff", radius: 30}} style={styles.containerEmail}>
                    <Image style={{width: 24, height: 24}} 
                    source={require("../../assets/icons/mail.png")}></Image>
                </Pressable>
            </View>
        }}>

            <Tabs.Screen initialParams={{ olhoAberto }} name="Home" options={{title: ""}}></Tabs.Screen>
            <Tabs.Screen name="Ferramentas" options={{title: ""}}></Tabs.Screen>
            <Tabs.Screen name="Lojas" options={{title: ""}}></Tabs.Screen>

        </Tabs>
    );
}

const styles = StyleSheet.create({
     headerLeft: {
        marginLeft: width * 0.075,
        backgroundColor: "#9d0dfd",
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
     },

     headerRight: {
        flexDirection: "row",
        marginRight: width * 0.025,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
     },

     containerVerSaldo: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 50,
     },

     containerMeAjuda: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 50,
     },

     containerEmail: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 50,
     }
});