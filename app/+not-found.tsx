import { View as ViewSEM, StyleSheet as StyleSheetSEM, Text as TextSEM, Dimensions as DimensionsSEM, Button as ButtonSEM } from "react-native";
import { Link as LinkSEM } from "expo-router"; 

const { width: widthSEM, height: heightSEM } = DimensionsSEM.get("window");

export default function NotFoundSEM() {
    return (
        <ViewSEM style={stylesSEM.containerSEM}>
            <LinkSEM replace href="(tabs)/index" asChild>
                <ButtonSEM title="Ir para o Menu" />
            </LinkSEM>
        </ViewSEM>
    );
}

const stylesSEM = StyleSheetSEM.create({
    containerSEM: {
        width: widthSEM,
        height: heightSEM,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
    },
});
