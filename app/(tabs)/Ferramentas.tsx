import CardFerramentasSEM from "@/components/Ferramenta";
import { View, Text, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width: widthSEM, height: heightSEM } = Dimensions.get("window");

export default function FerramentasSEM() {
    return (        
        <View style={stylesSEM.viewSEM} className="flex flex-col gap-4">
            <View style={stylesSEM.containerSEM} className="flex flex-col gap-4">
                <Text style={stylesSEM.container_titleSEM} className="font-bold">Acompanhe seu dinheiro</Text>
                <CardFerramentasSEM imageSEM={require('@/assets/porco.png')} nameSEM={"Caixinhas"} valueSEM={"R$100,00"}/>
                <CardFerramentasSEM imageSEM={require('@/assets/barra.png')} nameSEM={"Investimentos"} valueSEM={"R$100,00"}/>
                <CardFerramentasSEM imageSEM={require('@/assets/cripto.png')} nameSEM={"Cripto"} valueSEM={"R$100,00"}/>
            </View>
            <View className="w-full h-[3px] bg-gray-200"></View>
            <View style={stylesSEM.containerSEM} className="flex flex-col gap-4">
                <Text style={stylesSEM.container_titleSEM} className="font-bold">Seguros</Text>
                <CardFerramentasSEM imageSEM={require('@/assets/coracao.png')} nameSEM={"Seguro de vida"} valueSEM={""}/>
                <CardFerramentasSEM imageSEM={require('@/assets/celular.png')} nameSEM={"Seguro de celular"} valueSEM={""}/>
            </View>
            <View></View>
        </View>
    );
}

const stylesSEM = StyleSheet.create({
    viewSEM: {
        paddingTop: heightSEM * 0.035,
        backgroundColor: 'white',
        height: '100%'
    },
    containerSEM: {
        paddingHorizontal: widthSEM * 0.075,
    },
    container_titleSEM: {
        marginBottom: heightSEM * 0.01,
        fontSize: 18
    }
});
