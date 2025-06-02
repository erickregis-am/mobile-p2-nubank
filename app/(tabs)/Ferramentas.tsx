import CardFerramentas from "@/components/Ferramenta";
import { View, Text, Image, StyleSheet} from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function Ferramentas(){
    return (



        
        <View style={styles.view} className="flex flex-col gap-4">
            <View style={styles.container} className="flex flex-col gap-4">
                <Text style={styles.container_title} className="font-bold">Acompanhe seu dinheiro</Text>
                <CardFerramentas image={require('@/assets/carotes.png')} name={"Caixinhas"} value={"R$100,00"}/>
                <CardFerramentas image={require('@/assets/carotes.png')} name={"Investimentos"} value={"R$100,00"}/>
                <CardFerramentas image={require('@/assets/carotes.png')} name={"Cripto"} value={"R$100,00"}/>
            </View>
            <View className="w-full h-1 bg-gray-200"></View>
            <View style={styles.container} className="flex flex-col gap-4">
                <Text style={styles.container_title} className="font-bold">Seguros</Text>
                <CardFerramentas image={require('@/assets/carotes.png')} name={"Seguro de vida"} value={""}/>
                <CardFerramentas image={require('@/assets/carotes.png')} name={"Seguro de celular"} value={""}/>
            </View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        marginTop: height * 0.035,
    },
    container:{
        paddingHorizontal: width * 0.075,
    },
    container_title:{
        marginBottom: height * 0.01,
        fontSize: 18
    }
});

