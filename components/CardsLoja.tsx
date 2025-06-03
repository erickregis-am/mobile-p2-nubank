import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Dimensions } from 'react-native';  

const { width, height} = Dimensions.get('window');

interface CardsStoreType {
    iconImage: ImageSourcePropType,
    title: string,
    description: string,
    offer?: string,
    style?: any,
}


export default function CardsLoja({iconImage, title, description, offer, style}: CardsStoreType) {
    return (
        <View style={[styles.containerCardloja, style]}>
            <View style={styles.IconImage}>
                <Image source={iconImage} style={{width: 58, height: 58, borderRadius: 10, resizeMode: 'cover'}}/>
            </View>
            
            <View style={styles.ContainerText}>
                <Text className={'text-left text-xl font-bold'}>{title}</Text>
                <Text className={'text-gray-400 text-left text-base/5 font-medium'}
                style={{marginTop: -2}}>{description}</Text>
            </View>

            <View style={styles.ContainerOffer}>
                <Text className={'text-lg font-bold'}>{`${offer} OFF`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCardloja: {
        flexDirection: 'row',
        width: width * 0.9,
        height: height * 0.085,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },

    IconImage: {
        height: "100%",
        width: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        borderRadius: 10,
    },

    ContainerText: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '85%',
         
    },

    ContainerOffer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});