import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        gap: 8,
        height: 36,
        maxHeight: 36,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderColor: colors.gray[300],
        backgroundColor: colors.gray[100],
    },

    text: {
        fontSize: 14,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    },

    wrapperSelected: {
        flexDirection: "row",
        gap: 8,
        height: 36,
        maxHeight: 36,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: colors.green.base,
    },

    textSelected: {
        fontSize: 14,
        color: colors.gray[100],
        fontFamily: fontFamily.regular,
    },
})