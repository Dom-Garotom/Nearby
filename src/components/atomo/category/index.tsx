import { colors } from '@/styles/colors'
import { categoriesIcons } from '@/utils/categories-icons'
import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import { s } from './style'

type Props = PressableProps & {
    iconId: string,
    name: string,
    isSelected?: boolean
}

export default function Category({ name, iconId, isSelected, ...props }: Props) {
    const Icon = categoriesIcons[iconId];

    return (
        <Pressable style={isSelected ? s.wrapperSelected : s.wrapper} {...props}>
            <Icon size={16} color={isSelected ? colors.gray[100] : colors.gray[500]} />
            <Text style={[isSelected ? s.textSelected : s.text]}>{name}</Text>
        </Pressable>
    )
}
