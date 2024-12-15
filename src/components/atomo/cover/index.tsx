import React from 'react'
import { ImageBackground, View } from 'react-native'
import { Button } from '@/components/atomo/button'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { s } from './style'

type Props = {
    uri: string
}

export default function Cover({ uri }: Props) {
    return (
        <ImageBackground source={{ uri: uri }} style={s.container}>
            <View style={s.header}>
                <Button style={{ height: 50, width: 50 }} onPress={() => router.back()}>
                    <Button.Icon icon={IconArrowLeft} />
                </Button>
            </View>
        </ImageBackground>
    )
}
