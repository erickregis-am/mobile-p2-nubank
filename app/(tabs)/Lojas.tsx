import { View as ViewSEM, Text as TextSEM, Pressable as PressableSEM, StyleSheet as StyleSheetSEM } from "react-native";
import { ScrollView as ScrollViewSEM } from "react-native";
import { Dimensions as DimensionsSEM } from "react-native";
import CardsDestaqueSEM from "@/components/CardsDestaque";
import CardsLojaSEM from "@/components/CardsLoja";

const { width: widthSEM, height: heightSEM } = DimensionsSEM.get("window");

export default function LojasSEM() {
    return (
        <ScrollViewSEM showsVerticalScrollIndicator={false}>
            <ViewSEM style={stylesSEM.container_DestacadosSEM}>
                <TextSEM style={{ fontWeight: 600, color: 'black', fontSize: 20 }}>Destaques</TextSEM>
            </ViewSEM>

            <ScrollViewSEM
                horizontal
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}
                style={stylesSEM.ContainerCardsSEM}
            >
                {[1, 2, 3].map((_, indexSEM) => (
                    <CardsDestaqueSEM
                        key={indexSEM}
                        backgroundImageSEM={require("../../assets/elden-ring.png")}
                        iconImageSEM={require("../../assets/playstation.png")}
                        colorBottomSEM="#014198"
                        titleSEM="Jogo do momento"
                        descriptionSEM="Nightreign saiu no playstation 5 nessa sexta-feira."
                        descontOfferSEM="15% OFF"
                        styleSEM={{ marginRight: indexSEM === 2 ? 0 : 10 }}
                    />
                ))}
                <ViewSEM style={{ paddingHorizontal: widthSEM * 0.06 }}></ViewSEM>
            </ScrollViewSEM>

            <ViewSEM style={stylesSEM.Container_TemdeTudoSEM}>
                <TextSEM style={{ fontWeight: 600, color: 'black', fontSize: 20 }}>Tem de Tudo</TextSEM>
            </ViewSEM>

            <ViewSEM style={stylesSEM.ContainerLojasSEM}>
                {[1, 2, 3].map((_, indexSEM) => (                    
                    <CardsLojaSEM
                        key={indexSEM}
                        iconImageSEM={require("../../assets/bemol.png")}
                        titleSEM="Bemol"
                        descriptionSEM='Produtos de alta qualidade para o consumidor.'
                        descontOfferSEM="R$5"
                    />
                ))}
            </ViewSEM>
        </ScrollViewSEM>
    );
}

const stylesSEM = StyleSheetSEM.create({
    container_DestacadosSEM: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        paddingHorizontal: widthSEM * 0.06,
        paddingVertical: heightSEM * 0.025,
        paddingBottom: heightSEM * 0.035
    },

    ContainerCardsSEM: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: widthSEM * 0.06,
        paddingBottom: heightSEM * 0.02
    },

    Container_TemdeTudoSEM: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        paddingHorizontal: widthSEM * 0.06,
        paddingTop: heightSEM * 0.02,
    },

    ContainerLojasSEM: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: widthSEM * 0.06,
        paddingVertical: heightSEM * 0.025,
        gap: 5
    }
});
