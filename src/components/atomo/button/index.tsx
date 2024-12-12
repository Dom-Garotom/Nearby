import { TouchableOpacityProps, TouchableOpacity, TextProps, ActivityIndicator, Text } from "react-native";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";
import React from "react";
import { s } from "./style";

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean;
}

function Button({ children, style, isLoading, ...props }: ButtonProps) {
    return (
        <TouchableOpacity style={[s.button, style]} activeOpacity={0.8} disabled={isLoading} {...props}>
            {isLoading ?
                <ActivityIndicator size={"small"} color={colors.gray[100]} />
                : children
            }
        </TouchableOpacity>
    )
}

function Title({ children }: TextProps) {
    return (
        <Text style={s.title}>
            {children}
        </Text>
    )
}

type IconProp = {
    icon: React.ComponentType<IconProps>
}

function Icon({ icon: Icon }: IconProp) {
    return <Icon size={24} color={colors.gray[100]} />
}


Button.Title = Title;
Button.Icon = Icon;

export { Button }