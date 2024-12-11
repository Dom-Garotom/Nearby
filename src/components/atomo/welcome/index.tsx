import React from 'react'
import { Image, Text, View } from 'react-native'
import { s } from './style'

type Props = {
    title: string
    desccription: string
}

export default function Welcome({ desccription, title }: Props) {
    return (
        <View style={{ gap: 28 }}>
            <Image style={s.image} source={require("@/assets/logo.png")} />
            <View>
                <Text style={s.title}>{title}</Text>
                <Text style={s.description}>{desccription}</Text>
            </View>
        </View>
    )
}
