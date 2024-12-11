import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    image:{
        width: 48,
        height: 48
    },

    title:{
        fontSize: 24,
        fontWeight: "600",
        fontFamily: fontFamily.bold,
        color: colors.gray[600]
    },

    description:{
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500]
    },
})