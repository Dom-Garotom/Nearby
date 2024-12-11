import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container:{
        gap: 16,
        flexDirection: "row",
    },

    title:{
        fontSize: 16,
        fontWeight: "600",
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600]
    },

    description:{
        fontSize: 14,
        fontWeight: "400",
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        backgroundColor: "red",
    },

})