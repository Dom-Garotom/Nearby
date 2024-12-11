import React from 'react'
import { Text, View } from 'react-native'
import { s } from './style'
import { colors } from '@/styles/colors'
import { IconProps } from '@tabler/icons-react-native'

type Props = {
  title: String
  description: string
  icon : React.ComponentType<IconProps>
}

export default function Step({ description, icon: Icon, title }: Props) {
  return (
    <View style={s.container}>
      {Icon &&
        <Icon size={32} color={colors.red.base} />
      }
      <View style={{ flex: 1 }}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}
