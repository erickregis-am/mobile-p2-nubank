import { View, Text, Pressable, StyleSheet} from "react-native";
import { ScrollView } from "react-native";
import CardsLoja from "@/components/CardsLoja";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Lojas(){
    return (
        <View>
            <View style={styles.container_Destacados}>
                <Text style={{fontWeight:600, color: 'black', fontSize: 20}}>Destaques</Text>
            </View>

            <ScrollView horizontal overScrollMode="never" showsHorizontalScrollIndicator={false} style={styles.ContainerCards}>
                {[1, 2, 3].map((_, index) => (
                    <CardsLoja
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
        </View>
    );
}

const styles = StyleSheet.create({
    container_Destacados: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        paddingHorizontal: width * 0.06,
        paddingVertical: height * 0.025,
    },

    ContainerCards: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: width*0.06,
    }
});