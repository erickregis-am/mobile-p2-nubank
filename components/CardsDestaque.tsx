import { View, Text, StyleSheet , ImageSourcePropType, Image } from 'react-native';
import { Dimensions } from 'react-native';
 
const { width: widthSEM, height: heightSEM } = Dimensions.get('window');

interface CardTypeSEM {
    backgroundImageSEM: ImageSourcePropType;
    iconImageSEM: ImageSourcePropType;
    titleSEM?: string;
    descriptionSEM?: string;
    descontOfferSEM?: string;
    colorBottomSEM?: string;
    styleSEM?: any;
}

export default function CardsDestaqueSEM({
    iconImageSEM, 
    backgroundImageSEM, 
    titleSEM, 
    descriptionSEM, 
    descontOfferSEM, 
    colorBottomSEM, 
    styleSEM
}: CardTypeSEM) {
    return (
        <View style={[stylesSEM.ContainerCardSEM, styleSEM]}>
            <Image style={{width: "100%", height: "60%", borderTopRightRadius: 10, borderTopLeftRadius: 10, zIndex: 0}} 
                   source={backgroundImageSEM} 
                   resizeMode='cover'/> 
            
            <View style={{width: "100%", height: "40%", backgroundColor: colorBottomSEM, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, gap: heightSEM*0.02, zIndex: 0}}>
                <View style={stylesSEM.ContainerIconandOfferSEM}>
                    <Image style={{height: 50, width: 50, borderRadius: 10}} 
                           resizeMode="contain" 
                           source={iconImageSEM}/>
                    <View style={{backgroundColor: 'white', width: widthSEM*0.25, height: heightSEM*0.04, borderRadius: 20, justifyContent: "center", alignItems: "center"}}>
                        <Text className={'font-bold'} style={{color: '#810AD0'}}>{descontOfferSEM}</Text>
                    </View>
                </View>

                <View style={stylesSEM.ContainerTextsSEM}>
                    <Text className={'text-slate-400 font-md text-xl text-left'}>{titleSEM}</Text>
                    <Text className={'text-white font-bold text-xl text-left'}>{descriptionSEM}</Text>
                </View>
            </View>
        </View>
    );
}

const stylesSEM = StyleSheet.create({
    ContainerCardSEM: {
        height: heightSEM * 0.4,
        width: widthSEM * 0.75,
    },

    ContainerTextsSEM: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "flex-start",
        width: widthSEM * 0.7,
        gap: heightSEM * 0.01,
        paddingHorizontal: widthSEM * 0.04
    },

    ContainerIconandOfferSEM: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: widthSEM * 0.05,
        zIndex: 1,
        marginTop: -(heightSEM * 0.03),
    }
});