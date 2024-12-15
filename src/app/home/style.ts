import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    name: {
        fontSize: 14,
        color: colors.gray[600],
        fontFamily: fontFamily.medium,
    },
    
    adress: {
        fontSize: 12,
        color: colors.gray[600],
        fontFamily: fontFamily.regular,
    },
})