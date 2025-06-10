import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Tabs, useRouter as useRouterSEM } from "expo-router";
import { Dimensions } from "react-native";
import "../../global.css"
import { useState as useStateSEM } from 'react';
import { useEyeSEM } from '@/context/EyeContext';

const { width: widthSEM, height: heightSEM } = Dimensions.get("window");

export default function TabLayoutSEM() {
    const { toggleOlhoSEM, olhoAbertoSEM } = useEyeSEM()
    const routerSEM = useRouterSEM()

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#9d0dfd",
            headerStyle: {
                backgroundColor: '#810AD0',
                height: heightSEM * 0.125,
                elevation: 0
            },

            headerLeft: () => 
                <View style={stylesSEM.headerLeftSEM}>
                    <Image style={{ width: 24, height: 24 }} 
                    source={require("../../assets/icons/user.png")} />
                </View>,

            headerRight: () => 
                <View style={stylesSEM.headerRightSEM}>
                    <Pressable onPress={toggleOlhoSEM} android_ripple={{ color: "b545ff", radius: 30 }} style={stylesSEM.containerVerSaldoSEM}>
                        <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} 
                        source={!olhoAbertoSEM ? require("../../assets/icons/close_eye.png") : require("../../assets/icons/view.png")} />
                    </Pressable>

                    <Pressable onPress={() => routerSEM.push('/ajuda')} android_ripple={{ color: "b545ff", radius: 30 }} style={stylesSEM.containerMeAjudaSEM}>
                        <Image style={{ width: 24, height: 24 }} 
                        source={require("../../assets/icons/questao.png")} />
                    </Pressable>

                    <Pressable android_ripple={{ color: "b545ff", radius: 30 }} style={stylesSEM.containerEmailSEM}>
                        <Image style={{ width: 24, height: 24 }} 
                        source={require("../../assets/icons/mail.png")} />
                    </Pressable>
                </View>
        }}>
            <Tabs.Screen name="index" options={{
                title: "",
                tabBarIcon: ({ color }) => (
                    <Image source={require('@/assets/index.png')} style={[stylesSEM.iconSEM, { tintColor: color }]} />
                ),
            }} />

            <Tabs.Screen name="ferramentas" options={{
                title: "",
                tabBarIcon: ({ color }) => (
                    <Image source={require('@/assets/moeda.png')} style={[stylesSEM.iconSEM, { tintColor: color }]} />
                ),
            }} />

            <Tabs.Screen name="lojas" options={{
                title: "",
                tabBarIcon: ({ color }) => (
                    <Image source={require('@/assets/loja.png')} style={[stylesSEM.iconSEM, { tintColor: color }]} />
                ),
            }} />
        </Tabs>
    );
}

const stylesSEM = StyleSheet.create({
    headerLeftSEM: {
        marginLeft: widthSEM * 0.075,
        backgroundColor: "#9d0dfd",
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },

    headerRightSEM: {
        flexDirection: "row",
        marginRight: widthSEM * 0.025,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },

    containerVerSaldoSEM: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 50,
    },

    containerMeAjudaSEM: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 50,
    },

    containerEmailSEM: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 50,
    },

    iconSEM: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});
