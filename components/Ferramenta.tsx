import { View, Text, Image, StyleSheet, Dimensions, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React from 'react'

const { height: heightSEM } = Dimensions.get("window");

interface FerramentasSEM {
    imageSEM: ImageSourcePropType;
    nameSEM: string;
    valueSEM: string;
}

export default function CardFerramentasSEM({ imageSEM, nameSEM, valueSEM }: FerramentasSEM) {
  return (
    <TouchableOpacity className={`flex flex-row items-center justify-start pl-1 pr-4 gap-3`} style={stylesSEM.container_catoesSEM}>
        <Image style={stylesSEM.icon_cartaoSEM} source={imageSEM}/>
        <View className="flex flex-row justify-between flex-1 text-black">
            <Text className="font-semibold">{nameSEM}</Text>
            <Text className="font-semibold">{valueSEM}</Text>
        </View>
    </TouchableOpacity>
  )
}

const stylesSEM = StyleSheet.create({
    container_catoesSEM: {
        height: heightSEM * 0.065,
        backgroundColor: '#F0F1F5',
        borderRadius: 12
    },
    icon_cartaoSEM: {
        height: '40%',
        resizeMode: 'contain'
    },
})
