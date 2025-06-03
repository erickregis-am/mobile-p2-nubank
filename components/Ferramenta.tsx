import { View, Text, Image, StyleSheet, Dimensions, ImageSourcePropType} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window");

interface Ferramentas{
    image:ImageSourcePropType;
    name:string;
    value:string;
}
export default function CardFerramentas({image, name, value}:Ferramentas) {
  return (
    <View className={`bg-gray-300 rounded-xl flex flex-row items-center justify-start px-4 gap-3`} style={styles.container_catoes}>
        <Image style={styles.icon_cartao} source={image}/>
        <View className="flex flex-row justify-between flex-1 text-black">
            <Text className="font-semibold">{name}</Text>
            <Text className="font-semibold">{value}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container_catoes:{
        height: height * 0.065
    },
    icon_cartao:{
        height: '40%',
        resizeMode: 'contain'
    },
})