import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        width: "100%",
        height: 232,
        marginBottom: -32,
        backgroundColor: colors.gray[200],
    },
    header: {
        padding: 20,
        paddingTop: 56,
    },
})