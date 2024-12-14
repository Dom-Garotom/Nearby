import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container:{
        backgroundColor: colors.gray[100]
    },

    content:{
        gap: 12 ,
        padding: 16,
        paddingBottom: 100, 
    },

    title:{
        fontSize: 16,
        color: colors.gray[600],
        marginBottom: 12,
        fontFamily: fontFamily.regular,
    },

    indicator:{
        width: 80,
        height: 4,
        color: colors.gray[300],
    },

})