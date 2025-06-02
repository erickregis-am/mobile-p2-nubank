import HomeActionButton from "@/components/HomeActionButton";
import { ChevronRight } from "lucide-react-native";
import { View, Text, Pressable, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Home(){
    return (
        <View>
            <View style={styles.usuario}>
                <Text style={styles.texto_usuario}>
                    Olá, Gostoso
                </Text>
            </View>
            {/*Conta*/}
            <View style={styles.container_conta}>
                <View style={styles.container_valor}>
                    <Text style={{fontWeight:600, color: 'black', fontSize: 20}}>Conta</Text>
                    <ChevronRight size={24} color="#969696"/>
                </View>
                <Text style={{fontWeight:600, color:'black', fontSize:20}}>
                    R$ 1.353,68
                </Text>
            </View>
            {/* Ações */}
            <ScrollView style={styles.container_acoes} showsHorizontalScrollIndicator={false} overScrollMode="never" horizontal contentContainerStyle={{ gap: 16, paddingRight: 16}} className={`w-full flex flex-row px-8 my-9`}>
                <HomeActionButton title='Pix' image={require("@/assets/pix.png")} /> 
                <HomeActionButton title='Pagar' image={require("@/assets/bar_code.png")} /> 
                <HomeActionButton title='Pegar         Empréstimo' image={require("@/assets/pix.png")} /> 
                <HomeActionButton title='Transferir' image={require("@/assets/pix.png")} /> 
                <HomeActionButton title='Depositar' image={require("@/assets/pix.png")} /> 
            </ScrollView>
            <View className={`bg-gray-300 rounded-xl flex flex-row items-center justify-start px-4 gap-3`} style={styles.container_catoes}>
                <Image style={styles.icon_cartao} source={require('@/assets/carotes.png')}/>
                <Text className="font-semibold">Meus cartões</Text>
            </View>
            <ScrollView style={styles.container_alertas} showsHorizontalScrollIndicator={false} overScrollMode="never" horizontal contentContainerStyle={{ gap: 16, paddingRight: 16}} className={`w-full flex flex-row px-8 my-8`}>
                <View style={styles.container_novidades} className="bg-gray-300 rounded-xl p-4 flex flex-row justify-center items-center">
                    <Text>
                        <Text className="font-semibold text-purple-500">Novidade! </Text>
                        Conheça a ferramenta de Controle de Gastos do Nubank.
                    </Text>
                </View>
                <View style={styles.container_novidades} className="bg-gray-300 rounded-xl p-4 flex flex-row justify-center items-center">
                    <Text>
                        <Text className="font-semibold text-purple-500">Novidade! </Text>
                        Conheça a ferramenta de Controle de Gastos do Nubank.
                    </Text>
                </View>
            </ScrollView>
            <View className="w-full h-1 bg-gray-200"></View>
            <View style={styles.container_cartao_credito} className="flex flex-col w-full gap-4">
                <Image style={styles.icon_cartao_credito} source={require('@/assets/carotes.png')}/>
                <Text className="text-3xl font-semibold">Cartão de Crédito</Text>
                <Text className="font-normal text-lg w-full leading-6">Peca seu cartão de crédito sem anuidade e tenha mais controle da sua vida financeira.</Text>
                <TouchableOpacity style={styles.botao} className="bg-[#8A19D6] rounded-full flex flex-row p-6">
                    <Text className="text-white font-semibold text-xl text-center w-full">Pedir Cartão</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full h-1 bg-gray-200"></View>
            <StatusBar barStyle={"light-content"} translucent backgroundColor={'transparent'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container_alertas:{
        height: height * 0.10
    },
    usuario:{
        width: '100%',
        backgroundColor: '#810AD0',
        zIndex: 10,
        height: height*0.08,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    texto_usuario:{
        color: 'white',
        fontSize: 18,
        fontFamily: 'Graphik-Black-Trial',
        marginLeft: width * 0.075,
    },
    container_conta:{
        width: '100%',
        height: height * 0.12,
        display: 'flex',
        flexDirection: 'column',
        gap: height * 0.01,
        justifyContent: 'center',
        paddingHorizontal: width * 0.075,
    },
    container_valor: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container_catoes:{
        marginHorizontal: width * 0.075,
        height: height * 0.065
    },
    icon_cartao:{
        height: '40%',
        resizeMode: 'contain'
    },
    container_novidades:{
        height: height*0.09,
        width: width*0.69,
        fontSize: 22
    },
    container_cartao_credito:{
        paddingHorizontal: width * 0.075,
        paddingVertical: height * 0.025
    },
    icon_cartao_credito:{
        height: '9%',
        resizeMode: 'contain'
    },
    botao:{
        width: width * 0.38
    },
    container_acoes:{
        height: height * 0.14
    }
})