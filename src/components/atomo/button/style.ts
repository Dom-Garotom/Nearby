import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    button:{
        height: 56,
        maxHeight: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        flexDirection: "row",
        gap: 12,
        backgroundColor: colors.green.base,
    },

    title:{
        fontSize: 16,
        fontWeight: "600",
        fontFamily: fontFamily.semiBold,
        color: colors.gray[100],
    },
})