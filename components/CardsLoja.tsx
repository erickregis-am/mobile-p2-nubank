import { View, Text, StyleSheet , ImageSourcePropType, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { jsiConfigureProps } from 'react-native-reanimated/lib/typescript/core';

const { width, height } = Dimensions.get('window');

interface CardType {
    backgroundImage: ImageSourcePropType;
    iconImage: ImageSourcePropType;
    title?: string;
    description?: string;
    descontOffer?: string;
    colorBottom?: string;
    style?: any;
}

export default function CardsLoja({iconImage, backgroundImage, title, description, descontOffer, colorBottom, style}: CardType){
    return (
        <View style={[styles.ContainerCard, style]}>
            <Image style={{width: "100%", height: "60%", borderTopRightRadius: 10, borderTopLeftRadius: 10, zIndex: 0}} source={backgroundImage} resizeMode='cover'/> 
            
            <View style={{width: "100%", height: "40%", backgroundColor: colorBottom, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, gap: height*0.02, zIndex: 0}}>
                <View style={styles.ContainerIconandOffer}>
                    <Image style={{height: 50, width: 50, borderRadius: 5}} resizeMode="contain" source={iconImage}/>
                    <View style={{backgroundColor: 'white', width: width*0.25, height: height*0.04, borderRadius: 20, justifyContent: "center", alignItems: "center"}}>
                        <Text className={'text-red-500 font-normal'}>{descontOffer}</Text>
                    </View>
                </View>

                <View style={styles.ContainerTexts}>
                    <Text className={'text-slate-400 font-md text-xl text-left'}>{title}</Text>
                    <Text className={'text-white font-bold text-xl text-left'}>{description}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ContainerCard: {
        height: height * 0.4,
        width: width * 0.75,
    },

    ContainerTexts: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "flex-start",
        width: width * 0.7,
        gap: height * 0.01,
        paddingHorizontal: width * 0.04
    },

    ContainerIconandOffer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.05,
        zIndex: 1,
        marginTop: -(height * 0.03),
    }
});