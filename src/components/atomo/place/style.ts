import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        minHeight: 120,
        maxHeight: 130,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        gap: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.gray[200],
        backgroundColor: colors.gray[100],
    },

    content: {
        flex: 1,
        paddingVertical:8 , 
        gap : 4, 
    },

    image: {
        width: 116,
        height: 104,
        borderRadius: 8,
        backgroundColor: colors.gray[200]
    },

    title: {
        fontWeight: "600",
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600],
    },

    descricao: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
    },

    ticket: {
        fontWeight: "400",
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
    },

    ticketContainer: {
        flexDirection: 'row', 
        gap: 4,
        alignItems: "center"
    }

})