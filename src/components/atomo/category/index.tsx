import { colors } from '@/styles/colors'
import { categoriesIcons } from '@/utils/categories-icons'
import React, { useState } from 'react'
import { GestureResponderEvent, Pressable, PressableProps, Text } from 'react-native'
import { s } from './style'

type Props = PressableProps & {
    iconId: string,
    name: string,
    isSelected?: boolean
}

export default function Category({ name, iconId, isSelected, onPress, ...props }: Props) {
    const [selected, setSelected] = useState(isSelected)
    const Icon = categoriesIcons[iconId];

    const handleClick = (event: GestureResponderEvent) => {
        setSelected(!selected)
        onPress && onPress(event);
    }

    return (
        <Pressable style={selected ? s.wrapperSelected : s.wrapper} onPress={(event) => handleClick(event)} {...props}>
            <Icon size={16} color={selected ? colors.gray[100] : colors.gray[500]} />
            <Text style={[selected ? s.textSelected : s.text]}>{name}</Text>
        </Pressable>
    )
}
