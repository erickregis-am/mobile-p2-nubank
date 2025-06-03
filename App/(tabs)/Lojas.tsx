import { View, Text, Pressable, StyleSheet} from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";
import CardsDestaque from "@/components/CardsDestaque";
import CardsLoja from "@/components/CardsLoja";

const { width, height } = Dimensions.get("window");

export default function Lojas(){
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container_Destacados}>
                <Text style={{fontWeight:600, color: 'black', fontSize: 20}}>Destaques</Text>
            </View>

            <ScrollView horizontal overScrollMode="never" showsHorizontalScrollIndicator={false} style={styles.ContainerCards}>
                {[1, 2, 3].map((_, index) => (
                    <CardsDestaque
                    key={index}
                    backgroundImage={require("../../assets/elden-ring.png")}
                    iconImage={require("../../assets/playstation.png")}
                    colorBottom="#014198"
                    title="Jogo do momento"
                    description="Nightreign saiu no playstation 5 nessa sexta-feira."
                    descontOffer="15% OFF"
                    style={{ marginRight: index === 2 ? 0 : 10 }}  
                    />
                ))}
                {/* Isso é para compensar o padding inicial do scroll, permitindo assim descolar o último card */}
                <View style={{paddingHorizontal: width * 0.06}}></View>
            </ScrollView>

            <View style={styles.Container_TemdeTudo}>
                <Text style={{fontWeight:600, color: 'black', fontSize: 20}}>Tem de Tudo</Text>
            </View>

            < View style={styles.ContainerLojas}>
                {[1,2,3].map((_,index) => (
                    <CardsLoja
                    key={index}
                    iconImage={require("../../assets/bemol.png")}
                    title="Bemol"
                    description='Produtos de alta qualidade para o consumidor.'
                    offer="R$5"  
                    />
                ))}
            </ View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container_Destacados: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        paddingHorizontal: width * 0.06,
        paddingVertical: height * 0.025,
        paddingBottom: height * 0.035
    },

    ContainerCards: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: width*0.06,
        paddingBottom: height * 0.02
    },

    Container_TemdeTudo: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        paddingHorizontal: width * 0.06,
        paddingTop: height * 0.02,
    },

    ContainerLojas: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: width * 0.06,
        paddingVertical: height * 0.025,
        gap: 5
    }
});