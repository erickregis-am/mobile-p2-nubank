import { View, Text, Image, ImageSourcePropType} from 'react-native'
import React from 'react'

interface ActionProps{
  title:string
  image:ImageSourcePropType
}
export default function HomeActionButton({title, image}:ActionProps) {
  return (
    <View className="flex flex-col items-center gap-2 w-[72px]">
            <View className="bg-gray-300 rounded-full aspect-square h-[72px] flex justify-center items-center">
                <Image className="h-2/6 aspect-square" source={image}/>
            </View>
        <Text className="w-fit font-semibold text-center text-sm">{title}</Text>
    </View>
  )
}