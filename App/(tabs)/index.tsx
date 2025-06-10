import HomeActionButton from "@/components/HomeActionButton";
import { useEyeSEM } from "@/context/EyeContext";
import { ChevronRight } from "lucide-react-native";
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

const { width: widthSEM, height: heightSEM } = Dimensions.get("window");

export default function HomeSEM() {
    const {olhoAbertoSEM: olhoAbertoSEM} = useEyeSEM()
    return (
        <ScrollView style={stylesSEM.containerSEM}>
            <View style={stylesSEM.usuarioSEM}>
                <Text style={stylesSEM.texto_usuarioSEM}>
                    Olá, Matheus
                </Text>
            </View>
            
            {/*Conta*/}
            <View style={stylesSEM.container_contaSEM}>
                <View style={stylesSEM.container_valorSEM}>
                    <Text style={stylesSEM.conta_titleSEM}>Conta</Text>
                    <ChevronRight size={24} color="#969696"/>
                </View>
                <Text style={[stylesSEM.conta_valueSEM, olhoAbertoSEM && stylesSEM.hiddenValueSEM]}>
                    R$ 1.353,68
                </Text>
            </View>
            
            {/* Ações */}
            <ScrollView 
                style={stylesSEM.container_acoesSEM} 
                horizontal
                showsHorizontalScrollIndicator={false} 
                overScrollMode="never" 
                contentContainerStyle={stylesSEM.actionsContentSEM}
            >
                <HomeActionButton title='Pix' image={require("@/assets/pix.png")} /> 
                <HomeActionButton title='Pagar' image={require("@/assets/bar_code.png")} /> 
                <HomeActionButton title='Pegar         Empréstimo' image={require("@/assets/pix.png")} /> 
                <HomeActionButton title='Transferir' image={require("@/assets/pix.png")} /> 
                <HomeActionButton title='Depositar' image={require("@/assets/pix.png")} /> 
            </ScrollView>
            
            <View style={stylesSEM.container_cartoesSEM}>
                <Image style={stylesSEM.icon_cartaoSEM} source={require('@/assets/carotes.png')}/>
                <Text style={stylesSEM.cartoes_textSEM}>Meus cartões</Text>
            </View>
            
            <ScrollView 
                style={stylesSEM.container_alertasSEM} 
                horizontal
                showsHorizontalScrollIndicator={false} 
                overScrollMode="never" 
                contentContainerStyle={stylesSEM.alertsContentSEM}
            >
                <View style={stylesSEM.container_novidadesSEM}>
                    <Text style={stylesSEM.novidades_textSEM}>
                        <Text style={stylesSEM.novidades_highlightSEM}>Novidade! </Text>
                        Conheça a ferramenta de Controle de Gastos do Nubank.
                    </Text>
                </View>
                <View style={stylesSEM.container_novidadesSEM}>
                    <Text style={stylesSEM.novidades_textSEM}>
                        <Text style={stylesSEM.novidades_highlightSEM}>Novidade! </Text>
                        Conheça a ferramenta de Controle de Gastos do Nubank.
                    </Text>
                </View>
            </ScrollView>
            
            <View style={stylesSEM.dividerSEM}></View>
            
            <View style={stylesSEM.container_cartao_creditoSEM}>
                <Image style={stylesSEM.icon_cartao_creditoSEM} source={require('@/assets/carotes.png')}/>
                <Text style={stylesSEM.cartao_credito_titleSEM}>Cartão de Crédito</Text>
                <Text style={stylesSEM.cartao_credito_textSEM}>Peça seu cartão de crédito sem anuidade e tenha mais controle da sua vida financeira.</Text>
                <TouchableOpacity style={stylesSEM.botaoSEM}>
                    <Text style={stylesSEM.botao_textSEM}>Pedir Cartão</Text>
                </TouchableOpacity>
            </View>
            
            <View style={stylesSEM.dividerSEM}></View>
            <StatusBar barStyle={"light-content"} translucent backgroundColor={'transparent'}/>
        </ScrollView>
    );
}

const stylesSEM = StyleSheet.create({
    containerSEM: {
        flex: 1,
        backgroundColor: 'white',
    },
    usuarioSEM: {
        width: '100%',
        backgroundColor: '#810AD0',
        zIndex: 10,
        height: heightSEM * 0.08,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: widthSEM * 0.075,
    },
    texto_usuarioSEM: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Graphik-Black-Trial',
    },
    container_contaSEM: {
        width: '100%',
        height: heightSEM * 0.12,
        flexDirection: 'column',
        gap: heightSEM * 0.01,
        justifyContent: 'center',
        paddingHorizontal: widthSEM * 0.075,
    },
    container_valorSEM: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    conta_titleSEM: {
        fontWeight: '600', 
        color: 'black', 
        fontSize: 20
    },
    conta_valueSEM: {
        fontWeight: '600',
        fontSize: 20,
        color: 'black'
    },
    hiddenValueSEM: {
        backgroundColor: '#D1D1D1',
        color: 'transparent',
        borderRadius: 4
    },
    container_acoesSEM: {
        height: heightSEM * 0.14,
        marginTop: heightSEM * 0.025,
    },
    actionsContentSEM: {
        gap: 16,
        paddingHorizontal: widthSEM * 0.075,
        paddingRight: 32
    },
    container_cartoesSEM: {
        backgroundColor: '#F0F1F5',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: widthSEM * 0.025,
        gap: 12,
        height: heightSEM * 0.065,
        marginHorizontal: widthSEM * 0.075,
        marginTop: heightSEM * 0.025,
    },
    icon_cartaoSEM: {  
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    cartoes_textSEM: {
        fontWeight: '600',
        fontSize: 16
    },
    container_alertasSEM: {
        height: heightSEM * 0.10,
        marginTop: heightSEM * 0.025,
    },
    alertsContentSEM: {
        gap: 16,
        paddingHorizontal: widthSEM * 0.075,
        paddingRight: 32
    },
    container_novidadesSEM: {
        display: 'flex',
        flexDirection: 'row',
        width: widthSEM * 0.72,
        backgroundColor: '#F0F1F5',
        borderRadius: 12,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    novidades_textSEM: {
        fontSize: 16,
    },
    novidades_highlightSEM: {
        fontWeight: '600',
        color: '#8A19D6'
    },
    dividerSEM: {
        width: '100%',
        height: 1,
        backgroundColor: '#E5E5E5',
        marginVertical: heightSEM * 0.025,
    },
    container_cartao_creditoSEM: {
        width: '100%',
        flexDirection: 'column',
        gap: 16,
        paddingHorizontal: widthSEM * 0.075,
        paddingVertical: heightSEM * 0.025
    },
    icon_cartao_creditoSEM: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    cartao_credito_titleSEM: {
        fontSize: 28,
        fontWeight: '600',
        color: 'black'
    },
    cartao_credito_textSEM: {
        fontWeight: 'normal',
        fontSize: 18,
        width: '100%',
        lineHeight: 24
    },
    botaoSEM: {
        backgroundColor: '#8A19D6',
        borderRadius: 100,
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 16,
        width: widthSEM * 0.38,
        justifyContent: 'center'
    },
    botao_textSEM: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center'
    }
});
