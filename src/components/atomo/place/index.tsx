import { IconTicket } from '@tabler/icons-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { s } from './style'
import { colors } from '@/styles/colors'
import { PlaceProps } from '@/types/place'

type Props = TouchableOpacityProps & {
    data: PlaceProps,
}

export default function Place({ data, ...props }: Props) {
    return (
        <TouchableOpacity style={s.container} {...props}>
            <Image style={s.image} source={{uri: data.cover}} />

            <View style={s.content}>
                <Text style={s.title}>{data.name}</Text>
                <Text style={s.descricao}>{data.description}</Text>

                <View style={s.ticketContainer}>
                    <IconTicket color={colors.red.base} />
                    <Text style={s.ticket}>{data.coupons}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
