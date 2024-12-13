import Category from '@/components/atomo/category'
import React from 'react'
import { FlatList, View } from 'react-native'

export type CategoriesProps = {
  id: string,
  name: string
}[]

type Props = {
  data: CategoriesProps,
}

export default function Categories({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{gap:8}}
      renderItem={({item}) => (
        <Category name={item.name} iconId={item.id} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}
